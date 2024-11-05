const data = {
    patients: [],
    doctors: [],
    departments: [],
    appointments: [],
    rooms: [],
    medicalRecords: [],
    staff: []
};

// Functions to handle CRUD operations for each entity
function addRecord(entity, record) {
    data[entity].push(record);
    populateTable(entity);
    clearForm();
}

function editRecord(entity, id) {
    const record = data[entity].find(item => item.id === id);
    if (record) {
        populateForm(entity, record);
    }
}

function updateRecord(entity, id, updatedRecord) {
    const index = data[entity].findIndex(item => item.id === id);
    if (index !== -1) {
        data[entity][index] = updatedRecord;
        populateTable(entity);
        clearForm();
    }
}

function deleteRecord(entity, id) {
    data[entity] = data[entity].filter(item => item.id !== id);
    populateTable(entity);
}

function populateTable(entity) {
    const tableBody = document.getElementById(`${entity}TableBody`);
    tableBody.innerHTML = '';
    data[entity].forEach(record => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${record.id}</td>
            <td>${record.name || record.firstName || record.departmentName || record.doctorName || record.roomNumber}</td>
            <td>
                <button onclick="editRecord('${entity}', ${record.id})">Edit</button>
                <button onclick="deleteRecord('${entity}', ${record.id})">Delete</button>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

function populateForm(entity, record) {
    const form = document.getElementById(`${entity}Form`);
    for (const key in record) {
        if (form[key]) {
            form[key].value = record[key];
        }
    }
}

function submitForm(event, entity) {
    event.preventDefault();
    const form = document.getElementById(`${entity}Form`);
    const record = Array.from(form.elements).reduce((acc, input) => {
        if (input.name) acc[input.name] = input.value;
        return acc;
    }, {});
    if (record.id) {
        updateRecord(entity, record.id, record);
    } else {
        record.id = Date.now();
        addRecord(entity, record);
    }
}

function clearForm() {
    document.querySelectorAll('form').forEach(form => form.reset());
}
