<h1 align="center">JobStar - Job Tracking Platform</h1>

<p align="center">
  <img src="https://img.shields.io/badge/Made%20with-Node.js-green?style=for-the-badge" alt="Node.js">
  <img src="https://img.shields.io/badge/Deployed%20on-Heroku-purple?style=for-the-badge" alt="Heroku">
  <img src="https://img.shields.io/github/license/ACAZUMAH/JobStar?style=for-the-badge" alt="MIT License">
</p>

<p align="center"> 
  <img src="https://img.shields.io/github/v/release/ACAZUMAH/JobStar?style=flat-square" alt="Version">
  <img src="https://img.shields.io/github/last-commit/ACAZUMAH/JobStar?style=flat-square" alt="Last Commit">
  <img src="https://img.shields.io/github/issues/ACAZUMAH/JobStar?style=flat-square" alt="Issues">
</p>

<p align="center">
  <a href="#features">Features</a> •
  <a href="#technologies-used">Technologies Used</a> •
  <a href="#installation">Installation</a> •
  <a href="#api-endpoints">API Endpoints</a> •
  <a href="#license">License</a>
</p>

<hr>

<h2>🚀 Project Overview</h2>
<p><strong>JobStar</strong> is a job tracking platform designed for users to manage their job applications efficiently. It provides a secure environment for users to create, update, delete, and search for job entries, along with advanced authentication and OTP verification.</p>

<h2 id="features">✨ Features</h2>
<ul>
  <li>🔒 <strong>User Authentication</strong>: Secure sign-up and login using JWT and bcrypt.</li>
  <li>📲 <strong>OTP Verification</strong>: SMS and email verification using third-party APIs.</li>
  <li>📝 <strong>Job Management</strong>: Create, update, and delete job entries.</li>
  <li>🔍 <strong>Search Functionality</strong>: Filter jobs by company name, position, status, and salary.</li>
  <li>⚙️ <strong>Error Handling</strong>: Robust error handling with express-async-errors and http-errors.</li>
  <li>🛡️ <strong>Security Enhancements</strong>: Protection using Helmet, CORS, xss-clean, and express-rate-limit.</li>
  <li>☁️ <strong>Deployment</strong>: Hosted on Heroku.</li>
</ul>

<h2 id="technologies-used">🛠️ Technologies Used</h2>
<table>
  <tr>
    <td><strong>Frontend</strong></td>
    <td>N/A (Backend project)</td>
  </tr>
  <tr>
    <td><strong>Backend</strong></td>
    <td>Node.js, Express.js, TypeScript</td>
  </tr>
  <tr>
    <td><strong>Database</strong></td>
    <td>MongoDB</td>
  </tr>
  <tr>
    <td><strong>Authentication</strong></td>
    <td>JWT, bcrypt</td>
  </tr>
  <tr>
    <td><strong>APIs</strong></td>
    <td>Third-party for SMS & Email OTP</td>
  </tr>
  <tr>
    <td><strong>Security</strong></td>
    <td>Helmet, CORS, xss-clean, express-rate-limit</td>
  </tr>
  <tr>
    <td><strong>Deployment</strong></td>
    <td>Heroku</td>
  </tr>
</table>

<h2 id="installation">📦 Installation</h2>
<ol>
  <li>Clone the repository:
    <pre><code>git clone https://github.com/ACAZUMAH/jobstar.git</code></pre>
  </li>
  <li>Navigate to the project directory:
    <pre><code>cd JOBS PLATFORM</code></pre>
  </li>
  <li>Install the necessary dependencies:
    <pre><code>npm install</code></pre>
  </li>
  <li>Create a <code>.env</code> file and configure the following variables:
    <pre>
    <code>
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret
    API_KEY_SMS=your_sms_api_key
    API_KEY_EMAIL=your_email_api_key
    </code>
    </pre>
  </li>
  <li>Start the application:
    <pre><code>npm start</code></pre>
  </li>
</ol>

<h2 id="api-endpoints">🌐 API Endpoints</h2>
<table>
  <tr>
    <th>Description</th>
    <th>Endpoint</th>
    <th>Query Parameter<th>
  </tr>
  <tr>
    <td>Register a new user</td>
    <td><code>POST /auth/register</code></td>
  </tr>
  <tr>
    <td>Login a user</td>
    <td><code>POST /auth/login</code></td>
  </tr>
  <tr>
    <td>Get all jobs</td>
    <td><code>GET /jobs</code></td>
    <td>page, limits<td>
  </tr>
   <tr>
    <td>get all jobs of a user</td>
    <td><code>GET /jobs/user</code></td>
    <td>page, limit<td>
  </tr>
  <tr>
    <td>get one job of a user</td>
    <td><code>GET /job/user</code></td>
    <td>id (required): job id<td>
  </tr>
  <tr>
    <td>Create a new job</td>
    <td><code>POST /job</code></td>
  </tr>
  <tr>
    <td>Update a job</td>
    <td><code>PUT /job/</code></td>
    <td>id (required): job id<td>
  </tr>
  <tr>
    <td>Delete a job</td>
    <td><code>DELETE /jobs/delete?id</code></td>
    <td>id (required): job id<td>
  </tr>
  <tr>
    <td>Search for jobs by filters</td>
    <td><code>GET /search</code></td>
    <td>company,position,status,salary,page,limits,sortBy<td>
  </tr>
</table>

<h2 id="license">📝 License</h2>
<p>This project is licensed under the <a href="https://opensource.org/licenses/MIT">MIT License</a>.</p>
