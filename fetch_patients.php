<?php
include('db_config.php'); // Include the database connection

$sql = "SELECT * FROM patients"; // Query to fetch data from the database
$result = $conn->query($sql);

// Check if there are any results
if ($result->num_rows > 0) {
    // Output data for each row
    while($row = $result->fetch_assoc()) {
        echo "<tr>
                <td>" . $row['id'] . "</td>
                <td>" . $row['first_name'] . "</td>
                <td>" . $row['last_name'] . "</td>
                <td>
                    <button onclick='editPatient(" . $row['id'] . ")'>Edit</button>
                    <button onclick='deletePatient(" . $row['id'] . ")'>Delete</button>
                </td>
              </tr>";
    }
} else {
    echo "0 results";
}

$conn->close();
?>
