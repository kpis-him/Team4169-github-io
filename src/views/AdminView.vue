<script setup>
window.onload = function () {
  //     const loginButton = document.getElementById('login-btn');
  //     const usernameInput = document.getElementById('username');
  //     const passwordInput = document.getElementById('password');
  //     const messageElement = document.getElementById('message');
  //     const main = document.getElementById('main')
  //     const loginform = document.getElementById('login-form')

  //     loginButton.addEventListener('click', async (event) => {
  //         event.preventDefault()
  //         const user = usernameInput.value;
  //         const pwd = passwordInput.value;

  //         const response = await fetch('http://localhost:5050/form/login', {
  //             method: 'POST',
  //             headers: {
  //                 'Content-Type': 'application/json'
  //             },
  //             body: JSON.stringify({ user, pwd })
  //         });
  //         if (response.status === 200) {
  //             messageElement.textContent = 'Login successful';
  //             usernameInput.value = "";
  //             passwordInput.value = "";

  //             main.classList.add("flex")
  //             main.classList.remove("hidden")
  //             loginform.classList.add("hidden")
  //         } else {
  //             messageElement.textContent = 'Login failed. Please check your credentials.';
  //             passwordInput.value = "";
  //         }
  //     });

  const tableBody = document.getElementById("datalistv");
  const tableBodyEnroll = document.getElementById("tableliste");
  async function fetchData() {
    const response = await fetch("http://localhost:5050/form/volunteer");
    const data = await response.json();
    data.forEach((item) => {
      const row = document.createElement("tr");
      row.classList.add("data-row");
      const nameCell = document.createElement("td");
      const emailCell = document.createElement("td");
      const expertiseCell = document.createElement("td");
      const selectedValuesCell = document.createElement("td");

      nameCell.textContent = item.name || "";
      emailCell.textContent = item.email || "";
      expertiseCell.textContent = item.expertise || "";
      selectedValuesCell.textContent = item.selectedValues.join(", ") || "";

      row.appendChild(nameCell);
      row.appendChild(emailCell);
      row.appendChild(expertiseCell);
      row.appendChild(selectedValuesCell);

      tableBody.appendChild(row);
    });
    console.log(tableBody);
  }

  async function fetchDataEnroll() {
    const response = await fetch("http://localhost:5050/form");
    const data = await response.json();
    data.forEach((item) => {
      const row = document.createElement("tr");
      const nameCell = document.createElement("td");
      const emailCell = document.createElement("td");
      const enrolledCell = document.createElement("td");

      nameCell.textContent = item.name || "";
      emailCell.textContent = item.email || "";
      enrolledCell.textContent = item.enrolled || "";

      row.appendChild(nameCell);
      row.appendChild(emailCell);
      row.appendChild(enrolledCell);

      tableBodyEnroll.appendChild(row);
    });
  }
  // UNCOMMENT LATER
  // fetchData()
  // fetchDataEnroll()
};
</script>

<template>
  <!-- <form id="login-form" class="bg-white p-8 shadow-md rounded-md w-80 mt-36 mb-36">
        <h1 class="text-2xl font-semibold mb-4 text-black">Authentication:</h1>
        <input type="text" id="username" class="border rounded w-full py-2 px-3 mb-2 text-gray-700"
            placeholder="Username" />
        <input type="password" id="password" class="border rounded w-full py-2 px-3 mb-4 text-gray-700"
            placeholder="Password" />
        <button type="submit" id="login-btn" class="bg-blue-500 text-white px-4 py-2 rounded w-full">Login</button>
        <p id="message" class="text-red-800"></p>
    </form> -->
  <main id="main" class="gap-40 flex m-10">
    <section class="flex flex-col gap-10 mt-7 mb-10">
      <h1 class="font-extrabold text-gray-200 text-6xl mt-32">Enrolled</h1>
      <!-- NOTE ADD HIDDEN CLASS WHEN USING LOGIN PAGE-->

      <div class="row">
        <div class="column">
          <table>
            <tbody id="tableliste" class="text-black">
              <th>Name</th>
              <th>Email</th>
              <th>Enrolled</th>
              <tr>
                <td>Jonathan</td>
                <td>Jonathan@fakkemail.nett</td>
                <td>Unity</td>
              </tr>
              <tr>
                <td>Rachel</td>
                <td>rachel@fakkemail.nett</td>
                <td>PyBasic</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <div class="border border-gray-600"></div>

    <section class="flex flex-col gap-10 mt-36 mb-10">
      <h1 class="font-extrabold text-gray-200 text-6xl">Volunteered</h1>
      <div class="row">
        <div class="column">
          <div class="container">
            <table>
              <tbody id="datalistv" class="p-96 text-black">
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Experience</th>
                  <th>Courses</th>
                </tr>
                <tr>
                  <td>Jonathan</td>
                  <td>Jonathan@fakkemail.nett</td>
                  <td>
                    Jonathan is a master hacker who hacks kids on roblox lmfao
                    get rket
                  </td>
                  <td>PyAdv, PyBasic</td>
                </tr>
                <tr>
                  <td>Bob</td>
                  <td>bob@fakkemail.nett</td>
                  <td>Bob hacked your mom with a potato</td>
                  <td>PyAdv, Unity</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
<style scoped>
#main {
  margin-bottom: 20rem;
}

table {
  border-collapse: separate;
  border-spacing: 0;
  border: none;
  background-color: #ffffff;
  box-shadow: 0px 0px 90px rgba(161, 93, 93, 0.1);
}

table th,
table td {
  padding: 12px 20px;
  text-align: left;
}

table th {
  background-color: #f2f2f2;
  font-weight: bold;
}

table tr:nth-child(even) {
  background-color: #f9f9f9;
}

/* 1330 media screen */
@media (max-width: 1330px) {
  #main {
    flex-direction: column;
    gap: 6rem;
    text-align: center;
    justify-content: center;
    align-items: center;
  }

  table th,
  table td {
    padding: 12px 14px;
    text-align: left;
  }
}
</style>
