const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const pool = require('../db/db');



function createUser() {
  return `
  CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
  CREATE TABLE user(
    user_uid UUID NOT NULL PRIMARY KEY,
    f_name VARCHAR(50) NOT NULL,
    l_name VARCHAR(50) NOT NULL,
    email VARCHAR(255),
    password VARCHAR(300) NOT NULL
    gender VARCHAR(6) NOT NULL,
    dob DATE NOT NULL);
  `
}
/*
  currentUser has to be a joined table from user
  user = [image: {"png":'someLink',"webp":'someLink'}, "username": "bader"]
  beside currentUser //? comments => should contain user
  make comments for each article =>
  comments = [{id, content, createdAt, score, user, replies}, more of same]
*/
// sql
// CREATE TABLE users(
//   user_id SERIAL PRIMARY KEY,
//   username VARCHAR(255) NOT NULL,
//   email VARCHAR(255) NOT NULL,
//   --other user - related columns
// );
//  CREATE TABLE comments(
//   comment_id SERIAL PRIMARY KEY,
//   post_id INT NOT NULL,
//   user_id INT NOT NULL,
//   content TEXT NOT NULL,
//   created_at TIMESTAMP DEFAULT NOW(),
//   FOREIGN KEY(post_id) REFERENCES posts(id),
//   FOREIGN KEY(user_id) REFERENCES users(user_id)
// );
//  CREATE TABLE categories(
//   category_id SERIAL PRIMARY KEY,
//   category_name VARCHAR(255) NOT NULL
// );
//  CREATE TABLE postcategories(
//   post_id INT NOT NULL,
//   category_id INT NOT NULL,
//   FOREIGN KEY(post_id) REFERENCES posts(id),
//   FOREIGN KEY(category_id) REFERENCES categories(category_id)
// );

module.exports = pool;
/*

```sql 
SELECT tweets.*, users.* 
FROM tweets 
JOIN users ON tweets.sender_id = users.id 
JOIN follows ON follows.followee_id = users.id 
WHERE follows.follower_id = current_user;
```
*/

```
a whole article website guidance from bito

for an article that attracts millions of views, what are the crucial parts I need, for it, i will use pure js, and express and pg db, and jwt, but explain in details, things like packages, tables that are needed sdks, what to buid in those control, model, view pattern, what to use in cdns, what to use for security, I will make it for production, so be serios about it and take your time assumming the tended results, I want it to be explained in little tiny details that to be applied for

----------------------------------------------------
Performance Optimization, for compressing FE and using some caching
CORS policies, learn more:   handling CORS, and logging
Sign up for a CDN provider, do it with static 
----------------------------------------------------
6. Security:
- Implement secure coding practices to prevent common vulnerabilities like SQL injection, cross - site scripting(XSS), and cross - site request forgery(CSRF).
- Use libraries like Helmet.js to enhance security headers, such as Content Security Policy(CSP), Strict - Transport - Security(HSTS), and XSS protection.

7. Deployment and Production Setup:
- Set up a production environment with a reliable hosting provider like AWS, Google Cloud, or Heroku.
- Configure server settings, such as environment variables, port binding, and SSL certificates if necessary.
- Consider using containerization technologies like Docker for easier deployment and scalability.
- Implement load balancing mechanisms to distribute traffic across multiple servers for better performance and availability.

8. Performance Optimization:
- Minify and bundle your frontend assets(CSS, JavaScript) to reduce file sizes and improve loading speed.
- Enable server - side and client - side caching for static assets and API responses.
- Use tools like webpack or Gulp to automate asset optimization tasks.
- Profile your application using tools like Chrome DevTools or Node.js Profiler to identify and resolve performance bottlenecks.

9. SEO and Analytics:
- Implement SEO best practices, such as adding meta tags, using descriptive URLs, and providing relevant content.
- Integrate Google Analytics or other analytics tools to track user behavior, page views, and conversion rates.
- Use tools like Google Search Console to monitor and optimize your website's presence in search engine results.

10. Testing and Monitoring:
- Write automated tests using frameworks like Jest or Mocha to ensure the correctness of your application's functionality.
  - Implement unit tests, integration tests, and end - to - end tests to cover different aspects of your application.
- Set up monitoring tools like New Relic, Datadog, or Prometheus to track application performance, errors, and uptime.
- Implement logging mechanisms to record important events and errors for debugging and analysis purposes.
WCAG 2.0 or 2.1 for accessibility

Test your application using accessibility tools like screen readers (e.g., NVDA, VoiceOver) to identify and fix accessibility issues.

----------------------------------------------------

12. Logging:
- Implement logging mechanisms to record important events, errors, and application behavior.
- Use libraries like Winston or Bunyan to log events to files or external services like Elasticsearch or Loggly.
- Log relevant information such as request details, error stack traces, and performance metrics.
- Configure log levels to control the verbosity of logging based on different environments(development, production).

13. Internationalization(i18n):
- Implement internationalization support to make your article accessible to users from different languages and regions.
- Use libraries like i18next or react - i18next to handle translations and language switching.
- Extract translatable strings from your frontend and backend code, and provide translation files for different languages.

14. Scalability and Performance:
- Design your application to be horizontally scalable by using techniques like load balancing and clustering.
- Consider using caching mechanisms like Redis or Memcached to cache frequently accessed data and reduce database load.
- Optimize database queries by creating indexes, denormalizing data, or using query optimization techniques.
- Implement asynchronous processing for time - consuming tasks using technologies like message queues(e.g., RabbitMQ, Kafka) or task schedulers(e.g., Celery).

---------------

Use tools like Grafana, Kibana, or Datadog to visualize and analyze monitoring data.
Continuously optimize your application based on monitoring insights, such as identifying and resolving performance bottlenecks or memory leaks.

// db access control??

Real-time Communication:
- Implement real - time communication features using technologies like WebSockets or server-sent events(SSE).
- Use libraries like Socket.io or SignalR to handle real - time messaging and event - driven communication between clients and the server.
- Implement features like live chat, real - time notifications, or collaborative editing.

Microservices Architecture: Use technologies like Docker and Kubernetes to containerize and orchestrate your microservices.

Social Media Integration:
- Integrate social media platforms like Facebook to allow users to sign in with their social media accounts.
- Implement social sharing features to enable users to share content from your application on social media.
- Utilize social media APIs to retrieve user profile information or post updates on behalf of users.

Push Notifications:
- Implement push notifications to engage users and provide timely updates.
- Use services like Firebase Cloud Messaging(FCM) or Apple Push Notification Service(APNS) to send push notifications to mobile devices.
- Set up notification triggers based on user actions or specific events in your application.

Data Analytics and Visualization:
- Integrate data analytics and visualization tools like Google Analytics, Mixpanel, or Tableau to gain insights into user behavior and application performance.
- Create custom dashboards and reports to monitor key metrics and make data - driven decisions.
- Leverage data pipelines and ETL(Extract, Transform, Load) processes to process and analyze large datasets.

Compliance and Privacy:
- Ensure compliance with relevant data protection regulations(e.g., GDPR, CCPA) by implementing appropriate privacy policies and consent mechanisms.
- Handle user data securely, encrypt sensitive data, and follow best practices for data storage and transmission.

33. Search Functionality:
- Implement search functionality using search engines like Elasticsearch or Algolia.
- Enable features like full - text search, filtering, and faceted navigation to help users find relevant content.
- Optimize search performance by indexing and configuring search settings based on your application's needs.

Email and Notification Services:
- Integrate email services like SendGrid, Mailgun, or AWS SES to send transactional emails or newsletters.
- Implement features like email verification, password reset, or email notifications.
- Use notification services like Firebase Cloud Messaging(FCM) or AWS SNS to send push notifications or SMS alerts.

Content Delivery Network(CDN):
- Utilize a CDN like Cloudflare, Akamai, or AWS CloudFront to cache and deliver static assets(images, CSS, JavaScript) closer to users.
- Improve page load times and reduce server load by offloading content delivery to CDN edge servers.

GDPR and Data Privacy Compliance:
- Ensure compliance with the General Data Protection Regulation(GDPR) or other data privacy regulations.

Performance Optimization:
- Optimize your application's performance by minimizing network requests, reducing file sizes, or implementing caching strategies.
- Use tools like WebPageTest or Lighthouse to analyze and improve page load times.
- Consider techniques like lazy loading, code splitting, or image optimization to improve overall performance.

Progressive Web Applications(PWAs):
- Develop PWAs to provide a native app - like experience on the web.
- Use service workers to enable offline functionality and caching.
- Implement features like push notifications, background sync, or home screen installation.

Machine Learning and Artificial Intelligence:
- Utilize machine learning and AI algorithms to provide personalized recommendations, predictive analytics, or data insights.
- Use frameworks like TensorFlow, scikit - learn, or PyTorch for model training and inference.
- Implement features like image recognition, natural language processing, or anomaly detection.

Voice User Interface(VUI):
- Enable voice interactions with your web application using voice recognition and speech synthesis technologies.
- Integrate voice assistants like Amazon Alexa, Google Assistant, or Microsoft Cortana into your application.
- Implement features like voice commands, voice search, or voice - controlled actions.

Gamification:
- Incorporate game elements into your web application to increase user engagement and motivation.
- Implement features like leaderboards, badges, challenges, or rewards.
- Use gamification frameworks like Phaser, Unity, or Pixi.js for game development.


Data Visualization:
- Use data visualization libraries like D3.js, Chart.js, or Highcharts to create interactive and visually appealing charts, graphs, or maps.
- Present complex data in a user - friendly and intuitive way.
- Enable features like filtering, drilling down, or exporting data.

Content Sharing and Collaboration:
- Implement features that allow users to share, collaborate, or co - edit content within your web application.
- Use collaboration tools like Google Drive, Microsoft Office 365, or Slack for document collaboration or project management.
- Enable features like version control, commenting, or real - time collaboration.

DevSecOps:
- Incorporate security into your DevOps practices to ensure secure and reliable software delivery.
- Use DevSecOps tools like Snyk, Aqua Security, or Twistlock to automate security testing, vulnerability scanning, or compliance checks.
- Implement features like security testing, threat modeling, or security training.

Edge Computing:
- Utilize edge computing to enable low - latency, high - bandwidth, and secure data processing at the edge of the network.
- Use edge computing platforms like AWS Greengrass, Azure IoT Edge, or Google Cloud IoT Edge for edge device management and data processing.
- Implement features like edge analytics, edge caching, or edge security.

Agile Development:
- Adopt agile development methodologies like Scrum or Kanban to improve collaboration, flexibility, and iterative development.
- Use project management tools like Jira, Trello, or Asana for task tracking, backlog management, or team coordination.
- Implement features like user stories, sprint planning, or continuous integration / continuous deployment(CI / CD).

Natural Language Processing(NLP):
- Enable your web application to understand and process natural language input from users.
- Use NLP libraries and APIs like NLTK, spaCy, or IBM Watson NLU for text analysis and language understanding.
- Implement features like sentiment analysis, entity recognition, or chatbot interactions.
```