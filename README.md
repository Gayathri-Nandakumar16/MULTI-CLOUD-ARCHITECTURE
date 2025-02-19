**MULTI CLOUD ARCHITECTURE**
**COMPANY: CODTECH IT SOLUTIONS**

**NAME: GAYATHRI.N**

**INTERN ID: CT08NPC**

**DOMAIN: CLOUD COMPUTING**

**DURATION: 4 WEEKS**

**MENTOR: NEELA SANTHOSH KUMAR**

**DESCRIPTION**: TASK-3: MULTICLOUD ARCHITECTURE


**1. Overview**
This project demonstrates a multi-cloud architecture by hosting different parts of a static website across AWS and GCP. The HTML is hosted in AWS S3, while CSS, JavaScript, and images are stored in GCP Cloud Storage. The interoperability is showcased as AWS fetches resources from GCP dynamically.

**2. Architecture Diagram**
yaml
Copy
Edit
      User's Browser
           |
      AWS S3 (HTML)
           |
           v
  ---------------------------------
  |      GCP Cloud Storage        |
  |  - CSS                        |
  |  - JavaScript                 |
  |  - Images                     |
  ---------------------------------
**3. Implementation Steps**
**Step 1:** Set Up AWS S3 for HTML Hosting
Create an S3 Bucket

Name: my-static-html-bucket
Region: us-east-1
Public Access: Allow public access.
Upload HTML Files

Upload index.html.
Enable Static Website Hosting

Set index.html as the default document.
Copy the S3 Website Endpoint.
Set Permissions

Add the following bucket policy to allow public access:
json
Copy
Edit
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::my-static-html-bucket/*"
    }
  ]
}

**Step 2**: Set Up GCP Cloud Storage for Assets
Create a Cloud Storage Bucket

Name: my-gcp-assets.
Region: Match AWS's region.
Access Control: Set to public.
Upload CSS, JavaScript, and Images

Upload style.css, script.js, and logo.png.
Make Objects Public

Change permission settings to "allUsers" → Storage Object Viewer.
Copy Public URLs for Each File

Example:
https://storage.googleapis.com/my-gcp-assets/style.css
https://storage.googleapis.com/my-gcp-assets/script.js
https://storage.googleapis.com/my-gcp-assets/logo.png

**Step 3:** Link AWS and GCP (Interoperability)
Modify index.html to Load GCP Resources

html
Copy
Edit
<link rel="stylesheet" href="https://storage.googleapis.com/my-gcp-assets/style.css">
<script src="https://storage.googleapis.com/my-gcp-assets/script.js"></script>
<img src="https://storage.googleapis.com/my-gcp-assets/logo.png" alt="My Logo">
Upload Updated index.html to AWS S3.

Test the Multi-Cloud Setup

Open the AWS S3 Website URL and ensure it correctly fetches assets from GCP.

**4. Testing and Demo**
**Test Case 1:** HTML Loading from AWS S3

Expected Output: Page loads with content.
**Test Case 2**: CSS, JS, Images Fetching from GCP

**Expected Output:** Styling and images load correctly from GCP.

**5. Conclusion**
This multi-cloud architecture showcases interoperability by using AWS S3 for HTML and GCP Cloud Storage for assets, demonstrating a shared resource setup across two cloud providers.

**SCREENSHOTS:**

**IMAGE 1:**
![Image](https://github.com/user-attachments/assets/bb627cbb-d330-481b-87b7-5e4bc5437bc4)

**IMAGE 2:**
![Image](https://github.com/user-attachments/assets/4cd01773-8228-4de0-9461-688d54cf0e76)

**IMAGE 3:**
![Image](https://github.com/user-attachments/assets/d1a31838-2a68-48a9-9c37-6445adca03f4)

**DEMONSTRATION VEDIO:**
                  Giving live resources is not possible for me because it may charge from cloud providers.So, I give my google drive link of my quick demonstartion vedio where i implemented the above senario.
                  **G-drive link:**https://drive.google.com/file/d/1-TjaDX0G9mSAsprBgBP1Bu2uoDCMTczp/view?usp=drivesdk
DEMO V
