# Weather-app

# Development of a fully fledged hardware to software weather station app integration with azure

Overview of My Project
Development of a fully fledged hardware to software weather station app integration with azure.

Problem -- Due to the most of the incoming services on weather people are not able to see and take accurate measurements on custom area..

Solution using Azure -- So I have developed a hardware integration where we installed a weather station physically on my house and with attachment of all types of sensors like UV Sensor, Lux sensor, rain sensor, temperature, pressure, humidity, air pollution levels sensors and many more. I integrated all those hardware devices with one single unit with Arduino and with the help of IoT then wrote the website code with JavaScript and CSS and using NodeJS and react. I used Azure app services to load them with it and Azure DevOps for cont. monitoring and seeing them through CI/CD pipelines. Then also used Cosmo DB for all weather database storing in key pair format and generating report and doing it further on.

The temperature record here exactly recorded from sensors and data is kept at Cosmo DB is shown below. The this week tab shows us the week data which is calculated from the last weeks data and predictions used in our algorithm showing the approx. temperatures of next week. The todays highlights' part shows us the details of the present day where the data is shown and parameters are there which comes from all hardware sensors that we have connected and integrated with Arduino and synced with Azure Cosmo DB.
todayhigh. When we click the each tile it pops up and gives all detailed detail of data with what it is, and its latest records of data from Azure Cosmo DB. Here, with the time stamp the records are shown here you can see the latest data has been taken presently today that is today itself 2022-02-17 at and the average of the 3 data amongst them is shown at the side. Then all this is kept in continuous development of the code to innovate more so we have kept all the things in sync with the GitHub triggers, DevOps CI/CD pipelines so that new code when committed it directly launches to production after our review.
So more automation is there.

The arduino code is also attached in the files... in the WEATHER_STATION.ino  file

Azure Services Involved --> Azure App Service, Azure Static Web Apps, Azure DevOps, Azure CosmoDB.

Complete Video Demo of the project --
YouTube-Demo -- https://youtu.be/WjqBbUzbGF0
