# Technologies

### Azure Services

**Name of Service**
- Blob Storage
    The screenshots taken by puppeteer will be stored in the blob storage container
- Timetrigger function
    This time trigger function will be invoked in certain intervals of time (Ex: every 30 minutes). The screenshots Will be taken with Puppeteer and stored in the blob storage
- HTTP trigger
    This will take the screenshots from the blob storage and prepare them to be displayed to the front-end by organizing them.

### APIs
 - No API's will be used for this project
**Name of API**


### Packages/Libraries/Databases

**Name of Packages/Library/Database**
- Puppeteer
    Puppeteer is a node library that provides high level API control that generates screenshots and pdf's of pages, among other things. The way that I would want to use this is that I will have this run in the azure function and take a screenshot of the news site.
- Materialize
    Materialize is a CSS framework that will allow me to speed up the process of creating the frontend of the website/application and display the data from the backend

### Front-end Languages

**Name of Language**
- HTML
    This will help me lay out the structure of the website/application
- CSS
    This will help me design the appearance of the website/application such that it will look presentable to the user.
- Javascript
    This will help me give interaction to the website/application. This will take the screenshots from the backend and organize them in a way that will allow the user to chronologically sort through the news and how it is reported throughout a given day.

### Flowchart

![Picture of my project flowchart](./flowchart.png)