// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
if (license === 'MIT')
return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]';

else if (license === 'IBM')
return '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)]';

else if (license === 'Mozilla')
return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]';

else
return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]'
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
if (license === 'MIT')
return `(https://opensource.org/licenses/MIT)`;

else if (license === 'IBM')
return '(https://opensource.org/licenses/IPL-1.0)'

else if ( license === 'Mozilla')
return '(https://opensource.org/licenses/MIT)'

else
return '(https://opensource.org/licenses/Apache-2.0)'
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `## License
  ${renderLicenseBadge(license)} ${renderLicenseLink(license)}
  `
}

// TODO: Create a function to generate markdown for README
// function generateMarkdown(data) {
//   return `# ${data.title}

// `;
// }

module.exports = renderLicenseSection;
