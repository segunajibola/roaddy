import React, { useState, useEffect } from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import { getVan } from "../../utils/api";
import { PopularVehicle, Loading } from "../components";
import useFetchVehicles from "../hooks/useFetchVehicles";

export default function Rental() {
  const [van, setVan] = useState(null);
  const [error, setError] = useState(null);
  const { id } = useParams();
  const location = useLocation();
  const {
    imageUrl,
    name,
    price,
    type,
    description,
    capacity,
    transmission,
    fuel,
  } = van || {};
  const { vans, loading, setLoading } = useFetchVehicles();

  useEffect(() => {
    async function loadVans() {
      setLoading(true);
      try {
        const data = await getVan(id);
        setVan(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }
    loadVans();
  }, [id]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <h1>There was an error: {error.message}</h1>;
  }

  return (
    <div className="pt-20 px-4">
      <div className="my-3">
        <h1 className="text-2xl my-3">Rental Summary</h1>
        <p className="text-xl">
          Prices may change depending on the duration of the rented vehicle.
        </p>
        <div className="flex gap-3 my-10">
          <div className="w-[50%]">
            <img
              src={imageUrl}
              alt=""
              className="w-full h-40 object-cover object-center rounded-xl"
            />
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="text-4xl">{name}</h2>
            <span className="text-[1.10rem]">440+ Reviewers</span>
          </div>
        </div>
        <div className="my-5 flex flex-col  gap-y-3">
          <div className="flex justify-between items-center">
            <span className="text-lg">Sub Total</span>
            <span className="text-3xl">$2</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-lg">Tax</span>
            <span className="text-3xl">$2</span>
          </div>
        </div>
        <div className="flex rounded-xl mb-4">
          <input
            type="text"
            placeholder="Apply promo code"
            className="w-[80%] bg-gray-200 rounded-l-xl p-3"
          />
          <button className="bg-[#ff8c38] p-4 foont-semibold text-xl rounded-r-xl">Apply</button>
        </div>
        <div className="flex justify-between items-center">
          <h3 className="text-2xl">Total Rental Price</h3>
          <span className="text-5xl">$2</span>
        </div>
      </div>
      <div className="flex flex-col gap-y-16 my-8">
        <div>
          <div className="flex justify-between">
            <div className="flex flex-col">
              <h3 className="font-semibold text-2xl">Billing Info</h3>
              <span>Please enter your billing info</span>
            </div>
            <span>Step 1 of 4</span>
          </div>
          <form action="" className="my-2">
            <div className="flex flex-col gap-2 mt-4">
              <label htmlFor="name" className="text-xl">
                Name
              </label>
              <input
                type="text"
                name=""
                id="name"
                placeholder="name"
                className="bg-gray-200 p-2.5 rounded-md"
              />
            </div>
            <div className="flex flex-col gap-2 mt-4">
              <label htmlFor="address" className="text-xl">
                Address
              </label>
              <input
                type="text"
                name=""
                id="address"
                placeholder="address"
                className="bg-gray-200 p-2.5 rounded-md"
              />
            </div>
            <div className="flex flex-col gap-2 mt-4">
              <label htmlFor="phone" className="text-xl">
                Phone Number
              </label>
              <input
                type="text"
                name=""
                id="phone"
                placeholder="phone"
                className="bg-gray-200 p-2.5 rounded-md"
              />
            </div>
            <div className="flex flex-col gap-2 mt-4">
              <label htmlFor="town" className="text-xl">
                Town/City
              </label>
              <input
                type="text"
                name=""
                id="town"
                placeholder="town or city"
                className="bg-gray-200 p-2.5 rounded-md"
              />
            </div>
          </form>
        </div>
        <div>
          <div className="flex justify-between">
            <div className="flex flex-col">
              <h3 className="font-semibold text-2xl">Rental Info</h3>
              <span>Please select your rental date</span>
            </div>
            <span>Step 2 of 4</span>
          </div>
          <div className="my-2 text-lg">Pick-Up</div>
          <form action="" className="my-2">
            <div className="flex flex-col gap-2 mt-4">
              <label htmlFor="pickup-location" className="text-xl">
                Locations
              </label>
              <input
                type="text"
                name=""
                id="pickup-location"
                placeholder="Select your city"
                className="bg-gray-200 p-2.5 rounded-md"
              />
            </div>
            <div className="flex flex-col gap-2 mt-4">
              <label htmlFor="pickup-time" className="text-xl">
                Time
              </label>
              <input
                type="time"
                name=""
                id="pickup-time"
                placeholder="Select your pick-up time"
                className="bg-gray-200 p-2.5 rounded-md"
              />
            </div>
            <div className="flex flex-col gap-2 mt-4">
              <label htmlFor="pickup-date" className="text-xl">
                Date
              </label>
              <input
                type="date"
                name=""
                id="pickup-date"
                placeholder="Select pick-up date"
                className="bg-gray-200 p-2.5 rounded-md"
              />
            </div>
            <div className="mt-4 mb-2 text-lg">Drop-Off</div>
            <div className="flex flex-col gap-2">
              <label htmlFor="dropoff-location" className="text-xl">
                Location
              </label>
              <input
                type="text"
                name=""
                id="dropoff-location"
                placeholder="Select your city"
                className="bg-gray-200 p-2.5 rounded-md"
              />
            </div>
            <div className="flex flex-col gap-2 mt-4">
              <label htmlFor="dropoff-time" className="text-xl">
                Time
              </label>
              <input
                type="time"
                name=""
                id="dropoff-time"
                placeholder="Select your pick-up time"
                className="bg-gray-200 p-2.5 rounded-md"
              />
            </div>
            <div className="flex flex-col gap-2 mt-4">
              <label htmlFor="dropoff-date" className="text-xl">
                Date
              </label>
              <input
                type="date"
                name=""
                id="dropoff-date"
                placeholder="Select pick-up date"
                className="bg-gray-200 p-2.5 rounded-md"
              />
            </div>
          </form>
        </div>
        <div>
          <div className="flex justify-between">
            <div className="flex flex-col">
              <h3 className="font-semibold text-2xl">Payment Method</h3>
              <span>Please enter your payment method</span>
            </div>
            <span>Step 3 of 4</span>
          </div>
          <div>
            <div>
              <div className="my-2 text-lg">Credit Card</div>

              <form action="">
                <div className="flex flex-col gap-2 mt-4">
                  <label htmlFor="card-number" className="text-xl">
                    Card Number
                  </label>
                  <input
                    type="text"
                    name=""
                    id="card-number"
                    placeholder="Card number"
                    className="bg-gray-200 p-2.5 rounded-md"
                  />
                </div>
                <div className="flex flex-col gap-2 mt-4">
                  <label htmlFor="card-holder" className="text-xl">
                    Card Holder
                  </label>
                  <input
                    type="text"
                    name=""
                    id="card-holder"
                    placeholder="Card holder"
                    className="bg-gray-200 p-2.5 rounded-md"
                  />
                </div>
                <div className="flex flex-col gap-2 mt-4">
                  <label htmlFor="expiration-date" className="text-xl">
                    Expiration Date
                  </label>
                  <input
                    type="text"
                    name=""
                    id="expiration-date"
                    placeholder="DD/MM/YY"
                    className="bg-gray-200 p-2.5 rounded-md"
                  />
                </div>
                <div className="flex flex-col gap-2 mt-4">
                  <label htmlFor="cvc" className="text-xl">
                    CVC
                  </label>
                  <input
                    type="text"
                    name=""
                    id="cvc"
                    placeholder="CVC"
                    className="bg-gray-200 p-2.5 rounded-md"
                  />
                </div>
              </form>
              <form action="" className="mt-8">
                <div className="bg-gray-100 p-3 flex justify-between my-2">
                  <div className="flex gap-x-2">
                    <input type="radio" id="paypal" name="pay"/>
                    <label htmlFor="paypal">PayPal</label>
                  </div>
                  <div>Paypal-logo</div>
                </div>

                <div className="bg-gray-100 p-3 flex justify-between">
                  <div className="flex gap-x-2">
                    <input type="radio" id="bitcoin" name="pay" />
                    <label htmlFor="bitcoin">Bitcoin</label>
                  </div>
                  <div>Bitcoin-logo</div>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div>
          <div className="flex justify-between">
            <div className="flex flex-col">
              <h3 className="font-semibold text-2xl">Confirmation</h3>
              <span className="w-[70%]">
                We are getting to the end. Just few clicks and your vehicle is
                ready
              </span>
            </div>
            <span className="w-[20%]">Step 4 of 4</span>
          </div>
          <form action="" className="mt-3">
            <div className="flex gap-x-1">
              <input type="checkbox" id="newsletter" />
              <label htmlFor="newsletter">
                I argree with sending marketing and newsletter emails. No spam.
              </label>
            </div>
            <div className="flex gap-x-1">
              <input type="checkbox" id="terms-and-condition" />
              <label htmlFor="terms-and-condition">
                I argree with the terms and condition and privacy policy.
              </label>
            </div>
          </form>
        </div>
        <div className="-mt-4">
          <button className="bg-[#ff8c38] p-4 foont-semibold text-2xl w-[20%] rounded-md">
            Pay
          </button>
          <div className="mt-3">
            <div>secured icon</div>
            <p className="text-sm">
              All your data are safe, we are using the most advanced security to
              provide you the best experience ever.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
