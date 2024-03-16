import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
// import TablePagination from '@mui/material/TablePagination';
import TableRow from "@mui/material/TableRow";
import TextField from "@mui/material/TextField";
import {
  Typography,
  Grid,
  Button,
  Paper,
  Box,
  Card,
  CardContent,
  Modal,
} from "@mui/material";
import TokenIcon from "@mui/icons-material/Token";

const columns = [
  { id: "title", label: "Task Title", minWidth: 120, align: "left" },
  { id: "location", label: "Location", minWidth: 200, align: "left" },
  { id: "priority", label: "Priority", minWidth: 80, align: "left" },
  { id: "status", label: "Task Status", minWidth: 120, align: "left" },
];

let rows = [
  {
    title: "Network Task 1",
    location: "123 Main St",
    priority: "!",
    status: "Completed",
    availability: "Today, December 22, 2022, 14:00",
    align: "left",
    description:
      "I have a leaking faucet in my kitchen that needs urgent attention. Water is dripping steadily, and I'm concerned about potential water damage. The leak seems to be coming from the base of the faucet. Please send a skilled plumber to assess and fix the issue.",
  },
  {
    title: "Social Media Task 1",
    location: "456 Oak St",
    priority: "!",
    status: "In progress",
    availability: "Today, December 22, 2022, 14:00",
    align: "left",
    description:
      "I have a leaking faucet in my kitchen that needs urgent attention. Water is dripping steadily, and I'm concerned about potential water damage. The leak seems to be coming from the base of the faucet. Please send a skilled plumber to assess and fix the issue.",
  },
  {
    title: "Pumbling Repair",
    location: "123 Main Street, Cityville",
    priority: "!!",
    status: "Pending",
    availability: "Today, December 22, 2022, 14:00",
    align: "left",
    description:
      "I have a leaking faucet in my kitchen that needs urgent attention. Water is dripping steadily, and I'm concerned about potential water damage. The leak seems to be coming from the base of the faucet. Please send a skilled plumber to assess and fix the issue.",
  },
  // Add more rows as needed
];

const HandyMan = () => {
  // const [page, setPage] = React.useState(0);
  // const [rowsPerPage, setRowsPerPage] = React.useState(5);

  // const handleChangePage = (event, newPage) => {
  //   setPage(newPage);
  // };

  // const handleChangeRowsPerPage = () => {
  //   setRowsPerPage(5);
  //   setPage(0);
  // };

  const [filter, setFilter] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalDetails, setModalDetails] = useState({});
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const filteredRows = filter
    ? rows.filter((row) => row.status === filter)
    : rows;

  const [formData, setFormData] = useState({
    title: "",
    location: "",
    priority: "",
    status: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    rows = [...rows, formData];
    setFormData({
      title: "",
      location: "",
      priority: "",
      status: "",
    });
  };

  const getIconByCardName = (cardName) => {
    const iconMappings = {
      "Total Number of HandyMan Request": <TokenIcon sx={{ color: "blue" }} />,
      "Total Number of HandyMan Request Accepted": (
        <TokenIcon sx={{ color: "green" }} />
      ),
      "Total Number of HandyMan Request not Accepted": (
        <TokenIcon sx={{ color: "red" }} />
      ),
    };

    return iconMappings[cardName] || <TokenIcon />;
  };

  const handleModal = (row) => {
    // Add logic to handle the confirmation and submit
    setIsModalOpen(true);
    setModalDetails(row);
  };

  return (
    <>
      <h2>HandyMan</h2>

      <Grid container spacing={2} mb={4}>
        <Grid item xs={12} sm={4}>
          <Card>
            <CardContent>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                mb={1}
              >
                <Typography variant="h6" color="textSecondary">
                  Total Number of HandyMan Request
                </Typography>
                <Box
                  height={40}
                  width={40}
                  sx={{
                    bgcolor: "#e5f6fb",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {getIconByCardName("Total Number of HandyMan Request")}
                </Box>
              </Box>
              <Typography variant="h2">12</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card>
            <CardContent>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                mb={1}
              >
                <Typography variant="h6" color="textSecondary">
                  Total Number of HandyMan Request Accepted
                </Typography>
                <Box
                  height={40}
                  width={40}
                  sx={{
                    bgcolor: "#dcf6e9",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {getIconByCardName(
                    "Total Number of HandyMan Request Accepted"
                  )}
                </Box>
              </Box>
              <Typography variant="h2">5</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card>
            <CardContent>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                mb={1}
              >
                <Typography variant="h6" color="textSecondary">
                  Total Number of HandyMan Request not Accepted
                </Typography>
                <Box
                  height={40}
                  width={40}
                  sx={{
                    bgcolor: "#fce7e7",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {getIconByCardName(
                    "Total Number of HandyMan Request not accepted"
                  )}
                </Box>
              </Box>
              <Typography variant="h2">5</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Paper>
        <Modal
          open={isFormOpen}
          onClose={() => setIsFormOpen(false)}
          aria-labelledby="confirmation-modal"
          aria-describedby="confirmation-modal-description"
        >
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 400,
              bgcolor: "background.paper",
              border: "2px solid #000",
              boxShadow: 24,
              p: 4,
            }}
          >
            <form onSubmit={handleSubmit} style={{ padding: 15 }}>
              <TextField
                name="title"
                label="Task Title"
                value={formData.title}
                onChange={handleChange}
                fullWidth
                required
                margin="normal"
              />
              <TextField
                name="location"
                label="Location"
                value={formData.location}
                onChange={handleChange}
                fullWidth
                required
                margin="normal"
              />
              <TextField
                name="priority"
                label="Priority"
                value={formData.priority}
                onChange={handleChange}
                fullWidth
                required
                margin="normal"
              />
              <TextField
                name="status"
                label="Task Status"
                value={formData.status}
                onChange={handleChange}
                fullWidth
                required
                margin="normal"
              />
              <Button type="submit" variant="contained" color="primary">
                Add Task
              </Button>
            </form>
          </Box>
        </Modal>

        <Grid container spacing={2} mb={2}>
          <Grid item xs={12} sm={4}>
            <select
              value={filter}
              onChange={handleFilterChange}
              style={{ margin: 15, padding: 5 }}
            >
              <option value="">All</option>
              <option value="completed">Completed</option>
              <option value="in progress">In Progress</option>
              <option value="pending">Pending</option>
            </select>
          </Grid>
          <Grid item xs={12} sm={4}></Grid>
          <Grid item xs={12} sm={4} align={center}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              onClick={() => setIsFormOpen(true)}
            >
              Add Task
            </Button>
          </Grid>
        </Grid>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredRows.map((row, index) => (
                <TableRow
                  onClick={() => handleModal(row)}
                  key={row.title}
                  style={{
                    backgroundColor: index % 2 === 0 ? "#f5f5f5" : "inherit",
                  }}
                >
                  {columns.map((column) => (
                    <TableCell key={column.id} align={column.align}>
                      {row[column.id]}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Modal
          open={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          aria-labelledby="confirmation-modal"
          aria-describedby="confirmation-modal-description"
        >
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 500,
              bgcolor: "background.paper",
              border: "2px solid #000",
              boxShadow: 24,
              p: 4,
            }}
          >
            <TableContainer>
              <Table>
                <TableHead>
                  {/* <TableRow>
            <TableCell key={modalDetails.title} align="left" style={{ minWidth: "100px" }}>
                  Request Details
                </TableCell>
                {/* <TableCell key={modalDetails.title} align="left" style={{ minWidth: "100px" }}>
                {modalDetails.title}  
                </TableCell>
            </TableRow> */}
                  <h3>Request Details</h3>
                </TableHead>
                <TableBody>
                  <TableRow
                    key={modalDetails.title}
                    style={{ backgroundColor: "#f5f5f5" }}
                  >
                    <TableCell
                      key={modalDetails.title}
                      align="left"
                      style={{ minWidth: "100px" }}
                    >
                      Task Title
                    </TableCell>
                    <TableCell
                      key={modalDetails.title}
                      align="left"
                      style={{ minWidth: "100px" }}
                    >
                      {modalDetails.title}
                    </TableCell>
                  </TableRow>

                  <TableRow
                    key={modalDetails.location}
                    style={{ backgroundColor: "inherit" }}
                  >
                    <TableCell
                      key={modalDetails.location}
                      align="left"
                      style={{ minWidth: "100px" }}
                    >
                      Task Location
                    </TableCell>
                    <TableCell
                      key={modalDetails.location}
                      align="left"
                      style={{ minWidth: "100px" }}
                    >
                      {modalDetails.location}
                    </TableCell>
                  </TableRow>

                  <TableRow
                    key={modalDetails.status}
                    style={{ backgroundColor: "#f5f5f5" }}
                  >
                    <TableCell
                      key={modalDetails.status}
                      align="left"
                      style={{ minWidth: "100px" }}
                    >
                      Task Status
                    </TableCell>
                    <TableCell
                      key={modalDetails.status}
                      align="left"
                      style={{ minWidth: "100px" }}
                    >
                      {modalDetails.status}
                    </TableCell>
                  </TableRow>

                  <TableRow
                    key={modalDetails.priority}
                    style={{ backgroundColor: "inherit" }}
                  >
                    <TableCell
                      key={modalDetails.priority}
                      align="left"
                      style={{ minWidth: "100px" }}
                    >
                      Urgency
                    </TableCell>
                    <TableCell
                      key={modalDetails.priority}
                      align="left"
                      style={{ minWidth: "100px" }}
                    >
                      {modalDetails.priority === "!"
                        ? "Low"
                        : modalDetails.priority === "!!"
                        ? "Medium"
                        : "High (Due to continuous water linkage)"}
                    </TableCell>
                  </TableRow>

                  <TableRow
                    key={modalDetails.availability}
                    style={{ backgroundColor: "#f5f5f5" }}
                  >
                    <TableCell
                      key={modalDetails.availability}
                      align="left"
                      style={{ minWidth: "100px" }}
                    >
                      Availability time
                    </TableCell>
                    <TableCell
                      key={modalDetails.availability}
                      align="left"
                      style={{ minWidth: "100px" }}
                    >
                      {modalDetails.availability}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
            <div style={{ margin: "3px" }}>
                <h3>Description</h3>
                <p style={{ marginTop: "2px" }}>{modalDetails.description}</p>
            </div>
          </Box>
        </Modal>
        {/* <TablePagination
        rowsPerPageOptions={[5]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      /> */}
      </Paper>
    </>
  );
};

export default HandyMan;
