// =========================================
// CLASS OF 2015
// CHRIST THE KING COLLEGE, ONITSHA
// MEMBER, DUES, PAYMENT & EXPENSE SYSTEM
// =========================================


// =========================================
// 1. LOGIN SETTINGS
// =========================================

const ADMIN_USERNAME = "admin";

const ADMIN_PASSWORD = "admin";


// =========================================
// 2. LOGIN ELEMENTS
// =========================================

const loginScreen =
    document.getElementById("loginScreen");

const application =
    document.getElementById("application");

const loginForm =
    document.getElementById("loginForm");

const usernameInput =
    document.getElementById("username");

const passwordInput =
    document.getElementById("password");

const loginError =
    document.getElementById("loginError");

const logoutBtn =
    document.getElementById("logoutBtn");


// =========================================
// 3. LOGIN
// =========================================

function showApplication() {

    loginScreen.classList.add("hidden");

    application.classList.remove("hidden");

    usernameInput.value = "";

    passwordInput.value = "";

    loginError.textContent = "";
}


function logout() {

    application.classList.add("hidden");

    loginScreen.classList.remove("hidden");

    passwordInput.value = "";

    usernameInput.value = "";

    loginError.textContent = "";

    usernameInput.focus();
}


loginForm.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();

        const username =
            usernameInput.value.trim();

        const password =
            passwordInput.value;

        if (
            username === ADMIN_USERNAME &&
            password === ADMIN_PASSWORD
        ) {

            showApplication();

            refreshApplication();

        }

        else {

            loginError.textContent =
                "Incorrect username or password.";

            passwordInput.value = "";

            passwordInput.focus();

        }

    }
);


logoutBtn.addEventListener(
    "click",
    function() {

        const confirmation =
            confirm(
                "Are you sure you want to log out?"
            );

        if (confirmation) {

            logout();

        }

    }
);


// =========================================
// 4. STORAGE KEYS
// =========================================

const RECORDS_KEY =
    "ctkClass2015Records";

const PAYMENTS_KEY =
    "ctkClass2015Payments";

const EXPENSES_KEY =
    "ctkClass2015Expenses";


// =========================================
// 5. LOAD DATA
// =========================================

let records =
    JSON.parse(
        localStorage.getItem(RECORDS_KEY)
    ) || [];


let payments =
    JSON.parse(
        localStorage.getItem(PAYMENTS_KEY)
    ) || [];


let expenses =
    JSON.parse(
        localStorage.getItem(EXPENSES_KEY)
    ) || [];


// =========================================
// 6. FORM ELEMENTS
// =========================================

const debtForm =
    document.getElementById("debtForm");

const nameInput =
    document.getElementById("name");

const addressInput =
    document.getElementById("address");

const cityInput =
    document.getElementById("city");

const stateInput =
    document.getElementById("state");

const phone1Input =
    document.getElementById("phone1");

const phone2Input =
    document.getElementById("phone2");

const dueInput =
    document.getElementById("due");

const paidInput =
    document.getElementById("paid");

const dateInput =
    document.getElementById("date");

const descriptionInput =
    document.getElementById("description");


// =========================================
// 7. PAYMENT ELEMENTS
// =========================================

const paymentForm =
    document.getElementById("paymentForm");

const paymentMemberInput =
    document.getElementById("paymentMember");

const paymentAmountInput =
    document.getElementById("paymentAmount");

const paymentDateInput =
    document.getElementById("paymentDate");

const paymentDescriptionInput =
    document.getElementById("paymentDescription");


// =========================================
// 8. EXPENSE ELEMENTS
// =========================================

const expenseForm =
    document.getElementById("expenseForm");

const expenseAmountInput =
    document.getElementById("expenseAmount");

const expenseDateInput =
    document.getElementById("expenseDate");

const expenseDescriptionInput =
    document.getElementById("expenseDescription");


// =========================================
// 9. FILTERS
// =========================================

const searchInput =
    document.getElementById("search");

const cityFilter =
    document.getElementById("cityFilter");

const stateFilter =
    document.getElementById("stateFilter");

const statusFilter =
    document.getElementById("statusFilter");

const paymentSearchInput =
    document.getElementById("paymentSearch");

const expenseSearchInput =
    document.getElementById("expenseSearch");


// =========================================
// 10. TABLES
// =========================================

const recordsTable =
    document.getElementById("recordsTable");

const paymentsTable =
    document.getElementById("paymentsTable");

const expensesTable =
    document.getElementById("expensesTable");


// =========================================
// 11. DASHBOARD
// =========================================

const totalMembers =
    document.getElementById("totalMembers");

const totalDue =
    document.getElementById("totalDue");

const totalPaid =
    document.getElementById("totalPaid");

const totalDebt =
    document.getElementById("totalDebt");

const totalExpenses =
    document.getElementById("totalExpenses");

const totalBalance =
    document.getElementById("totalBalance");

const totalCleared =
    document.getElementById("totalCleared");

const totalOwing =
    document.getElementById("totalOwing");


// =========================================
// 12. BALANCE SUMMARY
// =========================================

const balancePaid =
    document.getElementById("balancePaid");

const balanceExpenses =
    document.getElementById("balanceExpenses");

const balanceAmount =
    document.getElementById("balanceAmount");


// =========================================
// 13. EXPORT BUTTONS
// =========================================

const exportRecordsExcelBtn =
    document.getElementById(
        "exportRecordsExcelBtn"
    );

const exportRecordsPdfBtn =
    document.getElementById(
        "exportRecordsPdfBtn"
    );

const exportPaymentsExcelBtn =
    document.getElementById(
        "exportPaymentsExcelBtn"
    );

const exportPaymentsPdfBtn =
    document.getElementById(
        "exportPaymentsPdfBtn"
    );

const exportExpensesExcelBtn =
    document.getElementById(
        "exportExpensesExcelBtn"
    );

const exportExpensesPdfBtn =
    document.getElementById(
        "exportExpensesPdfBtn"
    );


// =========================================
// 14. DATA MANAGEMENT
// =========================================

const backupBtn =
    document.getElementById("backupBtn");

const restoreBtn =
    document.getElementById("restoreBtn");

const restoreFile =
    document.getElementById("restoreFile");

const clearDataBtn =
    document.getElementById("clearDataBtn");


// =========================================
// 15. SAVE DATA
// =========================================

function saveRecords() {

    localStorage.setItem(
        RECORDS_KEY,
        JSON.stringify(records)
    );

}


function savePayments() {

    localStorage.setItem(
        PAYMENTS_KEY,
        JSON.stringify(payments)
    );

}


function saveExpenses() {

    localStorage.setItem(
        EXPENSES_KEY,
        JSON.stringify(expenses)
    );

}


// =========================================
// 16. MONEY
// =========================================

function formatMoney(amount) {

    return new Intl.NumberFormat(
        "en-NG",
        {
            style: "currency",
            currency: "NGN",
            minimumFractionDigits: 2
        }
    ).format(
        Number(amount) || 0
    );

}


// =========================================
// 17. ESCAPE HTML
// =========================================

function escapeHTML(value) {

    const div =
        document.createElement("div");

    div.textContent =
        value ?? "";

    return div.innerHTML;

}


// =========================================
// 18. OUTSTANDING
// =========================================

function calculateOutstanding(member) {

    const due =
        Number(member.due) || 0;

    const paid =
        Number(member.paid) || 0;

    return Math.max(
        due - paid,
        0
    );

}


// =========================================
// 19. TOTAL EXPENSES
// =========================================

function calculateTotalExpenses() {

    return expenses.reduce(
        function(total, expense) {

            return (
                total +
                (Number(expense.amount) || 0)
            );

        },
        0
    );

}


// =========================================
// 20. CURRENT BALANCE
// =========================================

function calculateCurrentBalance() {

    const paid =
        records.reduce(
            function(total, record) {

                return (
                    total +
                    (Number(record.paid) || 0)
                );

            },
            0
        );


    const expenseTotal =
        calculateTotalExpenses();


    return paid - expenseTotal;

}


// =========================================
// 21. MIGRATE OLD DATA
// =========================================

function migrateOldData() {

    let changed =
        false;


    records.forEach(
        function(record) {

            if (!record.id) {

                record.id =
                    Date.now().toString() +
                    Math.random()
                        .toString(36)
                        .substring(2);

                changed = true;

            }


            if (record.address === undefined) {

                record.address = "";

                changed = true;

            }


            if (record.city === undefined) {

                record.city = "";

                changed = true;

            }


            if (record.state === undefined) {

                record.state = "";

                changed = true;

            }


            if (record.phone1 === undefined) {

                record.phone1 = "";

                changed = true;

            }


            if (record.phone2 === undefined) {

                record.phone2 = "";

                changed = true;

            }


            const existingPayments =
                payments.filter(
                    function(payment) {

                        return (
                            payment.recordId ===
                            record.id
                        );

                    }
                );


            const paymentTotal =
                existingPayments.reduce(
                    function(total, payment) {

                        return (
                            total +
                            Number(payment.amount)
                        );

                    },
                    0
                );


            if (
                Number(record.paid) > 0 &&
                existingPayments.length === 0
            ) {

                payments.push({

                    id:
                        "migration-" +
                        Date.now() +
                        "-" +
                        Math.random()
                            .toString(36)
                            .substring(2),

                    recordId:
                        record.id,

                    memberName:
                        record.name,

                    amount:
                        Number(record.paid),

                    date:
                        record.date,

                    description:
                        "Initial payment"

                });


                changed = true;

            }

            else if (
                existingPayments.length > 0 &&
                Number(record.paid) !== paymentTotal
            ) {

                record.paid =
                    paymentTotal;

                changed = true;

            }

        }
    );


    if (changed) {

        saveRecords();

        savePayments();

    }

}


migrateOldData();


// =========================================
// 22. DATE
// =========================================

function getToday() {

    const today =
        new Date();

    const year =
        today.getFullYear();

    const month =
        String(
            today.getMonth() + 1
        ).padStart(2, "0");

    const day =
        String(
            today.getDate()
        ).padStart(2, "0");

    return `${year}-${month}-${day}`;

}


function setTodayDates() {

    dateInput.value =
        getToday();

    paymentDateInput.value =
        getToday();

    expenseDateInput.value =
        getToday();

}


// =========================================
// 23. DASHBOARD
// =========================================

function updateDashboard() {

    let dueTotal = 0;

    let paidTotal = 0;

    let outstandingTotal = 0;

    let cleared = 0;

    let owing = 0;


    records.forEach(
        function(record) {

            const due =
                Number(record.due) || 0;

            const paid =
                Number(record.paid) || 0;

            const outstanding =
                calculateOutstanding(record);


            dueTotal += due;

            paidTotal += paid;

            outstandingTotal +=
                outstanding;


            if (outstanding === 0) {

                cleared++;

            }

            else {

                owing++;

            }

        }
    );


    const expenseTotal =
        calculateTotalExpenses();


    const currentBalance =
        paidTotal -
        expenseTotal;


    totalMembers.textContent =
        records.length;


    totalDue.textContent =
        formatMoney(dueTotal);


    totalPaid.textContent =
        formatMoney(paidTotal);


    totalDebt.textContent =
        formatMoney(outstandingTotal);


    totalExpenses.textContent =
        formatMoney(expenseTotal);


    totalBalance.textContent =
        formatMoney(currentBalance);


    totalCleared.textContent =
        cleared;


    totalOwing.textContent =
        owing;


    balancePaid.textContent =
        formatMoney(paidTotal);


    balanceExpenses.textContent =
        formatMoney(expenseTotal);


    balanceAmount.textContent =
        formatMoney(currentBalance);

}


// =========================================
// 24. FILTER OPTIONS
// =========================================

function populateFilters() {

    const currentCity =
        cityFilter.value;

    const currentState =
        stateFilter.value;


    const cities =
        [
            ...new Set(
                records
                    .map(
                        function(record) {

                            return String(
                                record.city || ""
                            ).trim();

                        }
                    )
                    .filter(
                        function(city) {

                            return city !== "";

                        }
                    )
            )
        ]
        .sort(
            function(a, b) {

                return a.localeCompare(b);

            }
        );


    const states =
        [
            ...new Set(
                records
                    .map(
                        function(record) {

                            return String(
                                record.state || ""
                            ).trim();

                        }
                    )
                    .filter(
                        function(state) {

                            return state !== "";

                        }
                    )
            )
        ]
        .sort(
            function(a, b) {

                return a.localeCompare(b);

            }
        );


    cityFilter.innerHTML =
        `
        <option value="all">
            All Cities
        </option>
        `;


    cities.forEach(
        function(city) {

            const option =
                document.createElement("option");

            option.value =
                city;

            option.textContent =
                city;

            cityFilter.appendChild(option);

        }
    );


    stateFilter.innerHTML =
        `
        <option value="all">
            All States
        </option>
        `;


    states.forEach(
        function(state) {

            const option =
                document.createElement("option");

            option.value =
                state;

            option.textContent =
                state;

            stateFilter.appendChild(option);

        }
    );


    if (cities.includes(currentCity)) {

        cityFilter.value =
            currentCity;

    }


    if (states.includes(currentState)) {

        stateFilter.value =
            currentState;

    }

}


// =========================================
// 25. PAYMENT MEMBERS
// =========================================

function populatePaymentMembers() {

    const currentValue =
        paymentMemberInput.value;


    paymentMemberInput.innerHTML =
        `
        <option value="">
            Select a member
        </option>
        `;


    records.forEach(
        function(record) {

            const option =
                document.createElement("option");


            option.value =
                record.id;


            option.textContent =
                `${record.name} — ${formatMoney(
                    calculateOutstanding(record)
                )} outstanding`;


            paymentMemberInput.appendChild(
                option
            );

        }
    );


    if (
        records.some(
            function(record) {

                return (
                    record.id ===
                    currentValue
                );

            }
        )
    ) {

        paymentMemberInput.value =
            currentValue;

    }

}


// =========================================
// 26. DISPLAY RECORDS
// =========================================

function displayRecords() {

    const searchTerm =
        searchInput.value
            .toLowerCase()
            .trim();


    const selectedCity =
        cityFilter.value;


    const selectedState =
        stateFilter.value;


    const selectedStatus =
        statusFilter.value;


    const filteredRecords =
        records.filter(
            function(record) {

                const searchableText =
                    [

                        record.name,
                        record.address,
                        record.city,
                        record.state,
                        record.phone1,
                        record.phone2,
                        record.description

                    ]
                    .map(
                        function(value) {

                            return String(
                                value || ""
                            ).toLowerCase();

                        }
                    )
                    .join(" ");


                const matchesSearch =
                    searchableText.includes(
                        searchTerm
                    );


                const matchesCity =
                    selectedCity === "all" ||
                    String(
                        record.city || ""
                    ).trim() ===
                    selectedCity;


                const matchesState =
                    selectedState === "all" ||
                    String(
                        record.state || ""
                    ).trim() ===
                    selectedState;


                const outstanding =
                    calculateOutstanding(record);


                const memberStatus =
                    outstanding === 0
                        ? "cleared"
                        : "owing";


                const matchesStatus =
                    selectedStatus === "all" ||
                    selectedStatus ===
                    memberStatus;


                return (
                    matchesSearch &&
                    matchesCity &&
                    matchesState &&
                    matchesStatus
                );

            }
        );


    recordsTable.innerHTML = "";


    if (
        filteredRecords.length === 0
    ) {

        recordsTable.innerHTML =
            `
            <tr>
                <td
                    colspan="13"
                    class="empty-message"
                >
                    No records found.
                </td>
            </tr>
            `;

        return;

    }


    filteredRecords.forEach(
        function(record) {

            const outstanding =
                calculateOutstanding(record);


            const status =
                outstanding === 0
                    ? "CLEARED"
                    : "OWING";


            const statusClass =
                outstanding === 0
                    ? "status-cleared"
                    : "status-owing";


            const row =
                document.createElement("tr");


            row.innerHTML =
                `

                <td>
                    ${escapeHTML(record.name)}
                </td>

                <td>
                    ${escapeHTML(
                        record.address || "-"
                    )}
                </td>

                <td>
                    ${escapeHTML(
                        record.city || "-"
                    )}
                </td>

                <td>
                    ${escapeHTML(
                        record.state || "-"
                    )}
                </td>

                <td>
                    ${escapeHTML(
                        record.phone1 || "-"
                    )}
                </td>

                <td>
                    ${escapeHTML(
                        record.phone2 || "-"
                    )}
                </td>

                <td>
                    ${formatMoney(record.due)}
                </td>

                <td>
                    ${formatMoney(record.paid)}
                </td>

                <td>
                    ${formatMoney(outstanding)}
                </td>

                <td>
                    ${escapeHTML(record.date)}
                </td>

                <td>
                    ${escapeHTML(
                        record.description || "-"
                    )}
                </td>

                <td>
                    <span class="${statusClass}">
                        ${status}
                    </span>
                </td>

                <td>

                    <button
                        class="btn-edit"
                        onclick="editRecord('${record.id}')"
                    >
                        Edit
                    </button>

                    <button
                        class="btn-delete"
                        onclick="deleteRecord('${record.id}')"
                    >
                        Delete
                    </button>

                </td>

                `;


            recordsTable.appendChild(row);

        }
    );

}


// =========================================
// 27. DISPLAY PAYMENTS
// =========================================

function displayPayments() {

    const searchTerm =
        paymentSearchInput.value
            .toLowerCase()
            .trim();


    const filteredPayments =
        payments.filter(
            function(payment) {

                const memberName =
                    String(
                        payment.memberName || ""
                    ).toLowerCase();


                const description =
                    String(
                        payment.description || ""
                    ).toLowerCase();


                return (
                    memberName.includes(
                        searchTerm
                    ) ||
                    description.includes(
                        searchTerm
                    )
                );

            }
        );


    paymentsTable.innerHTML = "";


    if (
        filteredPayments.length === 0
    ) {

        paymentsTable.innerHTML =
            `
            <tr>

                <td
                    colspan="5"
                    class="empty-message"
                >
                    No payment records found.
                </td>

            </tr>
            `;

        return;

    }


    filteredPayments
        .slice()
        .sort(
            function(a, b) {

                return (
                    new Date(b.date) -
                    new Date(a.date)
                );

            }
        )
        .forEach(
            function(payment) {

                const row =
                    document.createElement("tr");


                row.innerHTML =
                    `

                    <td>
                        ${escapeHTML(payment.date)}
                    </td>

                    <td>
                        ${escapeHTML(payment.memberName)}
                    </td>

                    <td>
                        ${formatMoney(payment.amount)}
                    </td>

                    <td>
                        ${escapeHTML(
                            payment.description || "-"
                        )}
                    </td>

                    <td>

                        <button
                            class="btn-payment-delete"
                            onclick="deletePayment('${payment.id}')"
                        >
                            Delete
                        </button>

                    </td>

                    `;


                paymentsTable.appendChild(row);

            }
        );

}


// =========================================
// 28. DISPLAY EXPENSES
// =========================================

function displayExpenses() {

    const searchTerm =
        expenseSearchInput.value
            .toLowerCase()
            .trim();


    const filteredExpenses =
        expenses.filter(
            function(expense) {

                const description =
                    String(
                        expense.description || ""
                    ).toLowerCase();


                return description.includes(
                    searchTerm
                );

            }
        );


    expensesTable.innerHTML = "";


    if (
        filteredExpenses.length === 0
    ) {

        expensesTable.innerHTML =
            `
            <tr>

                <td
                    colspan="4"
                    class="empty-message"
                >
                    No expense records found.
                </td>

            </tr>
            `;

        return;

    }


    filteredExpenses
        .slice()
        .sort(
            function(a, b) {

                return (
                    new Date(b.date) -
                    new Date(a.date)
                );

            }
        )
        .forEach(
            function(expense) {

                const row =
                    document.createElement("tr");


                row.innerHTML =
                    `

                    <td>
                        ${escapeHTML(
                            expense.date
                        )}
                    </td>

                    <td>
                        ${escapeHTML(
                            expense.description
                        )}
                    </td>

                    <td>
                        ${formatMoney(
                            expense.amount
                        )}
                    </td>

                    <td>

                        <button
                            class="btn-expense-delete"
                            onclick="deleteExpense('${expense.id}')"
                        >
                            Delete
                        </button>

                    </td>

                    `;


                expensesTable.appendChild(row);

            }
        );

}


// =========================================
// 29. ADD MEMBER
// =========================================

debtForm.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();


        const name =
            nameInput.value.trim();

        const address =
            addressInput.value.trim();

        const city =
            cityInput.value.trim();

        const state =
            stateInput.value.trim();

        const phone1 =
            phone1Input.value.trim();

        const phone2 =
            phone2Input.value.trim();

        const due =
            Number(dueInput.value);

        const paid =
            Number(paidInput.value);

        const date =
            dateInput.value;

        const description =
            descriptionInput.value.trim();


        if (name === "") {

            alert(
                "Please enter the member's name."
            );

            return;

        }


        if (
            Number.isNaN(due) ||
            due <= 0
        ) {

            alert(
                "Please enter a valid amount due."
            );

            return;

        }


        if (
            Number.isNaN(paid) ||
            paid < 0
        ) {

            alert(
                "Please enter a valid amount paid."
            );

            return;

        }


        if (paid > due) {

            alert(
                "Amount paid cannot be greater than amount due."
            );

            return;

        }


        if (date === "") {

            alert(
                "Please select a date."
            );

            return;

        }


        const newRecord = {

            id:
                Date.now().toString(),

            name:
                name,

            address:
                address,

            city:
                city,

            state:
                state,

            phone1:
                phone1,

            phone2:
                phone2,

            due:
                due,

            paid:
                0,

            date:
                date,

            description:
                description

        };


        records.push(newRecord);


        if (paid > 0) {

            payments.push({

                id:
                    Date.now().toString() +
                    "-payment",

                recordId:
                    newRecord.id,

                memberName:
                    newRecord.name,

                amount:
                    paid,

                date:
                    newRecord.date,

                description:
                    description ||
                    "Initial payment"

            });


            newRecord.paid =
                paid;

        }


        saveRecords();

        savePayments();


        debtForm.reset();

        setTodayDates();

        refreshApplication();


        alert(
            "Member added successfully."
        );

    }
);


// =========================================
// 30. RECORD PAYMENT
// =========================================

paymentForm.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();


        const memberId =
            paymentMemberInput.value;


        const amount =
            Number(
                paymentAmountInput.value
            );


        const date =
            paymentDateInput.value;


        const description =
            paymentDescriptionInput.value.trim();


        if (memberId === "") {

            alert(
                "Please select a member."
            );

            return;

        }


        if (
            Number.isNaN(amount) ||
            amount <= 0
        ) {

            alert(
                "Please enter a valid payment amount."
            );

            return;

        }


        const member =
            records.find(
                function(record) {

                    return (
                        record.id ===
                        memberId
                    );

                }
            );


        if (!member) {

            alert(
                "Member could not be found."
            );

            return;

        }


        const outstanding =
            calculateOutstanding(member);


        if (amount > outstanding) {

            alert(
                `Payment cannot be greater than the outstanding balance of ${formatMoney(outstanding)}.`
            );

            return;

        }


        payments.push({

            id:
                Date.now().toString(),

            recordId:
                member.id,

            memberName:
                member.name,

            amount:
                amount,

            date:
                date,

            description:
                description

        });


        member.paid =
            Number(member.paid) +
            amount;


        saveRecords();

        savePayments();


        paymentForm.reset();

        setTodayDates();

        refreshApplication();


        alert(
            "Payment recorded successfully."
        );

    }
);


// =========================================
// 31. ADD EXPENSE
// =========================================

expenseForm.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();


        const amount =
            Number(
                expenseAmountInput.value
            );


        const date =
            expenseDateInput.value;


        const description =
            expenseDescriptionInput.value.trim();


        if (
            Number.isNaN(amount) ||
            amount <= 0
        ) {

            alert(
                "Please enter a valid expense amount."
            );

            return;

        }


        if (date === "") {

            alert(
                "Please select the expense date."
            );

            return;

        }


        if (description === "") {

            alert(
                "Please enter a description for the expense."
            );

            return;

        }


        const currentBalance =
            calculateCurrentBalance();


        const confirmation =
            confirm(
                `Record this expense of ${formatMoney(amount)}?`
            );


        if (!confirmation) {

            return;

        }


        expenses.push({

            id:
                Date.now().toString(),

            amount:
                amount,

            date:
                date,

            description:
                description

        });


        saveExpenses();


        expenseForm.reset();

        setTodayDates();

        refreshApplication();


        alert(
            "Expense added successfully."
        );

    }
);


// =========================================
// 32. EDIT MEMBER
// =========================================

function editRecord(id) {

    const record =
        records.find(
            function(item) {

                return (
                    item.id ===
                    id
                );

            }
        );


    if (!record) {

        return;

    }


    const newName =
        prompt(
            "Enter the member's name:",
            record.name
        );


    if (newName === null) {

        return;

    }


    const newAddress =
        prompt(
            "Enter the member's address:",
            record.address || ""
        );


    if (newAddress === null) {

        return;

    }


    const newCity =
        prompt(
            "Enter the city:",
            record.city || ""
        );


    if (newCity === null) {

        return;

    }


    const newState =
        prompt(
            "Enter the state:",
            record.state || ""
        );


    if (newState === null) {

        return;

    }


    const newPhone1 =
        prompt(
            "Enter phone number 1:",
            record.phone1 || ""
        );


    if (newPhone1 === null) {

        return;

    }


    const newPhone2 =
        prompt(
            "Enter phone number 2:",
            record.phone2 || ""
        );


    if (newPhone2 === null) {

        return;

    }


    const newDue =
        prompt(
            "Enter the amount due:",
            record.due
        );


    if (newDue === null) {

        return;

    }


    const newDate =
        prompt(
            "Enter the date (YYYY-MM-DD):",
            record.date
        );


    if (newDate === null) {

        return;

    }


    const newDescription =
        prompt(
            "Enter the description:",
            record.description || ""
        );


    if (newDescription === null) {

        return;

    }


    const due =
        Number(newDue);


    if (
        newName.trim() === "" ||
        Number.isNaN(due) ||
        due <= 0
    ) {

        alert(
            "Please enter valid information."
        );

        return;

    }


    if (
        due <
        Number(record.paid)
    ) {

        alert(
            "The amount due cannot be less than the amount already paid."
        );

        return;

    }


    record.name =
        newName.trim();

    record.address =
        newAddress.trim();

    record.city =
        newCity.trim();

    record.state =
        newState.trim();

    record.phone1 =
        newPhone1.trim();

    record.phone2 =
        newPhone2.trim();

    record.due =
        due;

    record.date =
        newDate;

    record.description =
        newDescription.trim();


    payments.forEach(
        function(payment) {

            if (
                payment.recordId ===
                record.id
            ) {

                payment.memberName =
                    record.name;

            }

        }
    );


    saveRecords();

    savePayments();

    refreshApplication();

}


// =========================================
// 33. DELETE MEMBER
// =========================================

function deleteRecord(id) {

    const record =
        records.find(
            function(item) {

                return (
                    item.id ===
                    id
                );

            }
        );


    if (!record) {

        return;

    }


    const confirmation =
        confirm(
            `Delete ${record.name} and all of their payment history? This cannot be undone.`
        );


    if (!confirmation) {

        return;

    }


    records =
        records.filter(
            function(item) {

                return (
                    item.id !==
                    id
                );

            }
        );


    payments =
        payments.filter(
            function(payment) {

                return (
                    payment.recordId !==
                    id
                );

            }
        );


    saveRecords();

    savePayments();

    refreshApplication();

}


// =========================================
// 34. DELETE PAYMENT
// =========================================

function deletePayment(id) {

    const payment =
        payments.find(
            function(item) {

                return (
                    item.id ===
                    id
                );

            }
        );


    if (!payment) {

        return;

    }


    const confirmation =
        confirm(
            `Delete this payment of ${formatMoney(payment.amount)}? The member's paid amount will also be reduced.`
        );


    if (!confirmation) {

        return;

    }


    const member =
        records.find(
            function(record) {

                return (
                    record.id ===
                    payment.recordId
                );

            }
        );


    payments =
        payments.filter(
            function(item) {

                return (
                    item.id !==
                    id
                );

            }
        );


    if (member) {

        member.paid =
            Math.max(
                0,
                Number(member.paid) -
                Number(payment.amount)
            );

    }


    saveRecords();

    savePayments();

    refreshApplication();

}


// =========================================
// 35. DELETE EXPENSE
// =========================================

function deleteExpense(id) {

    const expense =
        expenses.find(
            function(item) {

                return (
                    item.id ===
                    id
                );

            }
        );


    if (!expense) {

        return;

    }


    const confirmation =
        confirm(
            `Delete this expense of ${formatMoney(expense.amount)}? The current balance will be recalculated.`
        );


    if (!confirmation) {

        return;

    }


    expenses =
        expenses.filter(
            function(item) {

                return (
                    item.id !==
                    id
                );

            }
        );


    saveExpenses();

    refreshApplication();

}


// =========================================
// 36. FILTER EVENTS
// =========================================

searchInput.addEventListener(
    "input",
    displayRecords
);


cityFilter.addEventListener(
    "change",
    displayRecords
);


stateFilter.addEventListener(
    "change",
    displayRecords
);


statusFilter.addEventListener(
    "change",
    displayRecords
);


paymentSearchInput.addEventListener(
    "input",
    displayPayments
);


expenseSearchInput.addEventListener(
    "input",
    displayExpenses
);


// =========================================
// 37. REFRESH
// =========================================

function refreshApplication() {

    updateDashboard();

    populateFilters();

    populatePaymentMembers();

    displayRecords();

    displayPayments();

    displayExpenses();

}


// =========================================
// 38. EXCEL - MEMBERS
// =========================================

exportRecordsExcelBtn.addEventListener(
    "click",
    function() {

        if (records.length === 0) {

            alert(
                "There are no member records to export."
            );

            return;

        }


        if (typeof XLSX === "undefined") {

            alert(
                "Excel library could not be loaded. Check your internet connection and reload the page."
            );

            return;

        }


        const data =
            records.map(
                function(record) {

                    return {

                        "Name":
                            record.name,

                        "Address":
                            record.address || "",

                        "City":
                            record.city || "",

                        "State":
                            record.state || "",

                        "Phone Number 1":
                            record.phone1 || "",

                        "Phone Number 2":
                            record.phone2 || "",

                        "Amount Due":
                            Number(record.due),

                        "Amount Paid":
                            Number(record.paid),

                        "Outstanding":
                            calculateOutstanding(record),

                        "Date":
                            record.date,

                        "Description":
                            record.description || "",

                        "Status":
                            calculateOutstanding(record) === 0
                                ? "CLEARED"
                                : "OWING"

                    };

                }
            );


        const worksheet =
            XLSX.utils.json_to_sheet(data);


        const workbook =
            XLSX.utils.book_new();


        XLSX.utils.book_append_sheet(
            workbook,
            worksheet,
            "Member Records"
        );


        XLSX.writeFile(
            workbook,
            "CTK-Class-of-2015-Member-Records.xlsx"
        );

    }
);


// =========================================
// 39. EXCEL - PAYMENTS
// =========================================

exportPaymentsExcelBtn.addEventListener(
    "click",
    function() {

        if (payments.length === 0) {

            alert(
                "There are no payment records to export."
            );

            return;

        }


        if (typeof XLSX === "undefined") {

            alert(
                "Excel library could not be loaded. Check your internet connection and reload the page."
            );

            return;

        }


        const data =
            payments.map(
                function(payment) {

                    const member =
                        records.find(
                            function(record) {

                                return (
                                    record.id ===
                                    payment.recordId
                                );

                            }
                        );


                    return {

                        "Date":
                            payment.date,

                        "Member":
                            payment.memberName,

                        "Address":
                            member?.address || "",

                        "City":
                            member?.city || "",

                        "State":
                            member?.state || "",

                        "Phone Number 1":
                            member?.phone1 || "",

                        "Phone Number 2":
                            member?.phone2 || "",

                        "Amount Paid":
                            Number(payment.amount),

                        "Description":
                            payment.description || ""

                    };

                }
            );


        const worksheet =
            XLSX.utils.json_to_sheet(data);


        const workbook =
            XLSX.utils.book_new();


        XLSX.utils.book_append_sheet(
            workbook,
            worksheet,
            "Payment History"
        );


        XLSX.writeFile(
            workbook,
            "CTK-Class-of-2015-Payment-History.xlsx"
        );

    }
);


// =========================================
// 40. EXCEL - EXPENSES
// =========================================

exportExpensesExcelBtn.addEventListener(
    "click",
    function() {

        if (expenses.length === 0) {

            alert(
                "There are no expense records to export."
            );

            return;

        }


        if (typeof XLSX === "undefined") {

            alert(
                "Excel library could not be loaded. Check your internet connection and reload the page."
            );

            return;

        }


        const data =
            expenses.map(
                function(expense) {

                    return {

                        "Date":
                            expense.date,

                        "Expense Description":
                            expense.description,

                        "Amount":
                            Number(expense.amount)

                    };

                }
            );


        const total =
            calculateTotalExpenses();


        data.push({

            "Date":
                "",

            "Expense Description":
                "TOTAL EXPENSES",

            "Amount":
                total

        });


        const worksheet =
            XLSX.utils.json_to_sheet(data);


        const workbook =
            XLSX.utils.book_new();


        XLSX.utils.book_append_sheet(
            workbook,
            worksheet,
            "Expense History"
        );


        XLSX.writeFile(
            workbook,
            "CTK-Class-of-2015-Expense-History.xlsx"
        );

    }
);


// =========================================
// 41. PDF - MEMBERS
// =========================================

exportRecordsPdfBtn.addEventListener(
    "click",
    function() {

        if (records.length === 0) {

            alert(
                "There are no member records to export."
            );

            return;

        }


        if (
            typeof window.jspdf ===
            "undefined"
        ) {

            alert(
                "PDF library could not be loaded. Check your internet connection and reload the page."
            );

            return;

        }


        const { jsPDF } =
            window.jspdf;


        const doc =
            new jsPDF({
                orientation:
                    "landscape"
            });


        doc.setFontSize(16);

        doc.text(
            "Class of 2015 - Christ The King College, Onitsha",
            14,
            14
        );


        doc.setFontSize(11);

        doc.text(
            "Member & Dues Records",
            14,
            21
        );


        doc.setFontSize(8);

        doc.text(
            "Generated: " +
            new Date().toLocaleString(),
            14,
            27
        );


        const rows =
            records.map(
                function(record) {

                    return [

                        record.name,

                        record.address || "-",

                        record.city || "-",

                        record.state || "-",

                        record.phone1 || "-",

                        record.phone2 || "-",

                        formatMoney(record.due),

                        formatMoney(record.paid),

                        formatMoney(
                            calculateOutstanding(record)
                        ),

                        record.date,

                        calculateOutstanding(record) === 0
                            ? "CLEARED"
                            : "OWING"

                    ];

                }
            );


        doc.autoTable({

            startY: 33,

            head: [[

                "Name",
                "Address",
                "City",
                "State",
                "Phone 1",
                "Phone 2",
                "Due",
                "Paid",
                "Outstanding",
                "Date",
                "Status"

            ]],

            body: rows,

            styles: {

                fontSize: 6,

                cellPadding: 2

            },

            headStyles: {

                fillColor:
                    [11, 31, 58],

                textColor: 255,

                fontStyle:
                    "bold"

            }

        });


        doc.save(
            "CTK-Class-of-2015-Member-Records.pdf"
        );

    }
);


// =========================================
// 42. PDF - PAYMENTS
// =========================================

exportPaymentsPdfBtn.addEventListener(
    "click",
    function() {

        if (payments.length === 0) {

            alert(
                "There are no payment records to export."
            );

            return;

        }


        if (
            typeof window.jspdf ===
            "undefined"
        ) {

            alert(
                "PDF library could not be loaded. Check your internet connection and reload the page."
            );

            return;

        }


        const { jsPDF } =
            window.jspdf;


        const doc =
            new jsPDF({
                orientation:
                    "landscape"
            });


        doc.setFontSize(16);

        doc.text(
            "Class of 2015 - Christ The King College, Onitsha",
            14,
            14
        );


        doc.setFontSize(11);

        doc.text(
            "Payment History",
            14,
            21
        );


        doc.setFontSize(8);

        doc.text(
            "Generated: " +
            new Date().toLocaleString(),
            14,
            27
        );


        const rows =
            payments
                .slice()
                .sort(
                    function(a, b) {

                        return (
                            new Date(b.date) -
                            new Date(a.date)
                        );

                    }
                )
                .map(
                    function(payment) {

                        const member =
                            records.find(
                                function(record) {

                                    return (
                                        record.id ===
                                        payment.recordId
                                    );

                                }
                            );


                        return [

                            payment.date,

                            payment.memberName,

                            member?.city || "-",

                            member?.state || "-",

                            member?.phone1 || "-",

                            formatMoney(payment.amount),

                            payment.description || "-"

                        ];

                    }
                );


        doc.autoTable({

            startY: 33,

            head: [[

                "Date",
                "Member",
                "City",
                "State",
                "Phone",
                "Amount Paid",
                "Description"

            ]],

            body: rows,

            styles: {

                fontSize: 7,

                cellPadding: 3

            },

            headStyles: {

                fillColor:
                    [11, 31, 58],

                textColor: 255,

                fontStyle:
                    "bold"

            }

        });


        doc.save(
            "CTK-Class-of-2015-Payment-History.pdf"
        );

    }
);


// =========================================
// 43. PDF - EXPENSES
// =========================================

exportExpensesPdfBtn.addEventListener(
    "click",
    function() {

        if (expenses.length === 0) {

            alert(
                "There are no expense records to export."
            );

            return;

        }


        if (
            typeof window.jspdf ===
            "undefined"
        ) {

            alert(
                "PDF library could not be loaded. Check your internet connection and reload the page."
            );

            return;

        }


        const { jsPDF } =
            window.jspdf;


        const doc =
            new jsPDF({
                orientation:
                    "landscape"
            });


        const expenseTotal =
            calculateTotalExpenses();


        const currentBalance =
            calculateCurrentBalance();


        doc.setFontSize(16);

        doc.text(
            "Class of 2015 - Christ The King College, Onitsha",
            14,
            14
        );


        doc.setFontSize(11);

        doc.text(
            "Expense History",
            14,
            21
        );


        doc.setFontSize(8);

        doc.text(
            "Generated: " +
            new Date().toLocaleString(),
            14,
            27
        );


        const rows =
            expenses
                .slice()
                .sort(
                    function(a, b) {

                        return (
                            new Date(b.date) -
                            new Date(a.date)
                        );

                    }
                )
                .map(
                    function(expense) {

                        return [

                            expense.date,

                            expense.description,

                            formatMoney(
                                expense.amount
                            )

                        ];

                    }
                );


        doc.autoTable({

            startY: 33,

            head: [[

                "Date",
                "Expense Description",
                "Amount"

            ]],

            body: rows,

            foot: [[

                "",
                "TOTAL EXPENSES",
                formatMoney(expenseTotal)

            ]],

            styles: {

                fontSize: 8,

                cellPadding: 3

            },

            headStyles: {

                fillColor:
                    [11, 31, 58],

                textColor: 255,

                fontStyle:
                    "bold"

            },

            footStyles: {

                fillColor:
                    [240, 244, 248],

                textColor:
                    [11, 31, 58],

                fontStyle:
                    "bold"

            }

        });


        const finalY =
            doc.lastAutoTable.finalY + 10;


        doc.setFontSize(10);

        doc.text(
            "Total Money Received: " +
            formatMoney(
                records.reduce(
                    function(total, record) {

                        return (
                            total +
                            Number(record.paid || 0)
                        );

                    },
                    0
                )
            ),
            14,
            finalY
        );


        doc.text(
            "Total Expenses: " +
            formatMoney(expenseTotal),
            14,
            finalY + 7
        );


        doc.text(
            "Current Balance: " +
            formatMoney(currentBalance),
            14,
            finalY + 14
        );


        doc.save(
            "CTK-Class-of-2015-Expense-History.pdf"
        );

    }
);


// =========================================
// 44. BACKUP
// =========================================

backupBtn.addEventListener(
    "click",
    function() {

        const backup = {

            application:
                "Class of 2015 - Christ The King College, Onitsha",

            version:
                "5.0",

            exportedAt:
                new Date().toISOString(),

            records:
                records,

            payments:
                payments,

            expenses:
                expenses

        };


        const blob =
            new Blob(
                [
                    JSON.stringify(
                        backup,
                        null,
                        4
                    )
                ],
                {
                    type:
                        "application/json"
                }
            );


        const url =
            URL.createObjectURL(blob);


        const link =
            document.createElement("a");


        link.href =
            url;


        link.download =
            "CTK-Class-of-2015-Backup.json";


        document.body.appendChild(link);

        link.click();

        document.body.removeChild(link);

        URL.revokeObjectURL(url);

    }
);


// =========================================
// 45. RESTORE
// =========================================

restoreBtn.addEventListener(
    "click",
    function() {

        restoreFile.click();

    }
);


restoreFile.addEventListener(
    "change",
    function() {

        const file =
            restoreFile.files[0];


        if (!file) {

            return;

        }


        const reader =
            new FileReader();


        reader.onload =
            function(event) {

                try {

                    const backup =
                        JSON.parse(
                            event.target.result
                        );


                    if (
                        !backup.records ||
                        !backup.payments
                    ) {

                        throw new Error(
                            "Invalid backup."
                        );

                    }


                    const confirmation =
                        confirm(
                            "Restoring this backup will replace the current data. Continue?"
                        );


                    if (!confirmation) {

                        return;

                    }


                    records =
                        backup.records;


                    payments =
                        backup.payments;


                    expenses =
                        backup.expenses || [];


                    migrateOldData();


                    saveRecords();

                    savePayments();

                    saveExpenses();


                    refreshApplication();


                    alert(
                        "Data restored successfully."
                    );

                }

                catch (error) {

                    alert(
                        "Could not restore the backup. Please select a valid backup file."
                    );

                }

            };


        reader.readAsText(file);


        restoreFile.value = "";

    }
);


// =========================================
// 46. CLEAR ALL DATA
// =========================================

clearDataBtn.addEventListener(
    "click",
    function() {

        if (
            records.length === 0 &&
            payments.length === 0 &&
            expenses.length === 0
        ) {

            alert(
                "There is no data to clear."
            );

            return;

        }


        const confirmation =
            confirm(
                "WARNING: This will permanently delete ALL members, payment history and expense records from this browser. Continue?"
            );


        if (!confirmation) {

            return;

        }


        const secondConfirmation =
            confirm(
                "Are you absolutely sure? Make a backup first if you may need this data later."
            );


        if (!secondConfirmation) {

            return;

        }


        records = [];

        payments = [];

        expenses = [];


        saveRecords();

        savePayments();

        saveExpenses();


        refreshApplication();

    }
);


// =========================================
// 47. INITIALIZE
// =========================================

setTodayDates();


loginScreen.classList.remove(
    "hidden"
);


application.classList.add(
    "hidden"
);


usernameInput.focus();