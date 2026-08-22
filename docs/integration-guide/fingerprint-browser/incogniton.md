---
sidebar_position: 1
sidebar_label: Incogniton Fingerprint Browser Guide
description: Complete guide to configuring 006ip static residential proxies in Incogniton.
---

# Incogniton Fingerprint Browser — 006IP Proxy Guide

***Before using 006IP proxy services, make sure your network can access overseas resources normally. If you have connection issues, check your local network or contact support.***

006ip provides residential proxy infrastructure for businesses, developers, and cross-border teams, including **dynamic residential IPs** and **static residential IPs**. The platform supports country/region and city-level targeting, plus dashboard options such as IP allowlists, authentication methods, and location modes—suitable for compliant data collection, localized page testing, price monitoring, ad verification, and maintaining cross-border business environments.

**Static residential IPs** offer long-lived fixed egress addresses and are a better fit when you need continuity and connection stability. This guide walks through registration, trial traffic, purchasing, exporting credentials, and configuring 006IP proxies in **Incogniton**.

> **Need help? Contact us anytime:**
>
> - Telegram: [https://telegram.me/ip006ip](https://telegram.me/ip006ip)
> - Phone: `15673887335`
> - Email: [support@006ip.com](mailto:support@006ip.com)

## Getting Started

### 1. Create and sign in to a 006ip account

Step 1: Open the [006ip website](https://006ip.com), then click **Register** in the top-right corner. If you already have an account, click **Log In**.

![006ip homepage — registration entry](https://cdn.006ip.com/docs/img/guide/static-proxy/006ip-homepage.png)

Step 2: On the registration page, choose one of the following methods:

#### Option A: Email registration

Select **Email registration**, then enter your account/email, email verification code, password, and confirm password. Click **Send code**, check your inbox for the code, accept the Terms of Service and Privacy Policy, then click **Register now**.

![006ip email registration](https://cdn.006ip.com/docs/img/guide/static-proxy/006ip-register-email.png)

#### Option B: Phone registration

Select **Phone registration**, confirm the country/region code, enter your phone number, click **Send code**, and enter the SMS code. Accept the Terms of Service and Privacy Policy, then click **Register now**.

After phone registration succeeds, you are signed in automatically with a default password. Set your own login password in account settings as soon as possible.

![006ip phone registration](https://cdn.006ip.com/docs/img/guide/static-proxy/006ip-register-phone.png)

> The homepage also offers **Sign up with Gmail**. If you use Gmail, follow the on-page authorization flow.

### 2. Claim trial traffic

006ip currently offers a new-user trial: contact support to receive **1GB trial traffic** for free. Eligibility, available products, and validity follow the campaign page and support reply.

> Use trial traffic first to validate target regions, protocol compatibility, and business connectivity before choosing a paid plan.

### 3. Purchase static residential proxies

After signing in to the 006ip dashboard, open **Static Proxies** in the left sidebar, then choose **ISP Proxies** or **Datacenter Proxies** to enter the purchase page.

#### Step 1: Choose a purchase mode and set proxy attributes

The purchase page provides **Quick Configuration** and **Custom Configuration**. Both modes calculate pricing in real time based on your selections, but they fit different needs.

##### (1) Quick Configuration

Quick Configuration is for users who want platform default network settings and a fast checkout. Configure:

| Parameter | Description |
| --- | --- |
| **Access Type** | Choose **Dedicated** or **Shared**. Dedicated IPs suit stricter purity, stability, and isolation needs; Shared IPs suit cost-sensitive general access. |
| **Country / region and city** | Target by country/region and city, or choose **Random range** for country-wide distribution. |
| **Period** | Plans from 30–365 days; longer terms may include tiered discounts. Final pricing follows the purchase page. |
| **Fixed configuration** | **Connections (QPS)**, **Bandwidth**, and **UDP** use the default values shown on the page. |

![006ip static proxy — Quick Configuration](https://cdn.006ip.com/docs/img/guide/static-proxy/006ip-purchase-quick-mode.png)

##### (2) Custom Configuration

Enable **Custom Configuration** to purchase by IP segment and customize **Connections (QPS)**, **Bandwidth**, and **UDP**. You can also set **Use case**, allocate quantity by city/segment inventory, and choose a **Period**. Different settings affect pricing—review the **Order Summary** on the right before submitting.

![006ip static proxy — Custom Configuration](https://cdn.006ip.com/docs/img/guide/static-proxy/006ip-purchase-custom-mode.png)

#### Step 2: Confirm the order and pay

On the checkout page, selected IP inventory is locked for **15 minutes**. If payment is not completed in time, resources are released and you must place the order again.

Supported payment methods include:

- **Account balance**
- **Online payment**
- **Balance + online** combined payment

If balance is insufficient, the available balance is applied first and the remainder can be paid online. Balance payments require your 006ip payment password. Available online channels and currencies follow the checkout page.

![006ip order confirmation and payment](https://cdn.006ip.com/docs/img/guide/static-proxy/006ip-order-payment.png)

### 4. View and export proxy connection details

After payment succeeds, open **My IPs** to view purchased static IPs. The list shows bandwidth, QPS, UDP status, expiry, and resource state, and supports renew, disable, enable, and details.

![006ip My IPs list](https://cdn.006ip.com/docs/img/guide/static-proxy/006ip-my-ip-list.png)

Before configuring Incogniton, prepare these four connection fields:

- **Proxy IP address**
- **Port**
- **Username**
- **Password**

On **My IPs**, click **Export Credentials** in the top-right corner and choose a format that fits your client:

```text
HOST:PORT:USERNAME:PASSWORD
```

Exported files contain plaintext credentials. Store the file securely and do not share credentials via public chats, screenshots, or untrusted channels.

![006ip export credentials](https://cdn.006ip.com/docs/img/guide/static-proxy/006ip-export-credentials.png)

For purchase, renewal, and export details, see the [006ip Static Proxy User Guide](/static-proxy-user-guide/) and the latest prompts in the dashboard.

## Configure Incogniton

After completing the steps above and obtaining the 006IP proxy server address, port, username, and password, add the proxy to an Incogniton browser profile.

### 1. Create a browser profile

Open the **Incogniton** client, go to **Profiles** on the left, then click **Create Profile**.

![Incogniton create profile](https://cdn.006ip.com/docs/img/static-proxy/config-tutorial/incogniton-image1.png)

### 2. Enter 006IP proxy details

On the profile creation page, find the proxy settings area, select **Custom Proxy**, then fill in the connection details exported from the 006ip dashboard:

| Incogniton field | What to enter |
| --- | --- |
| **Connection type** | Match the protocol provided by 006IP (e.g. `HTTPS`). |
| **Proxy (IP)** | Enter the proxy host and port as `host:port`. |
| **Proxy username** | Enter the 006IP proxy username. |
| **Proxy password** | Enter the matching proxy password. |

If your exported credential format is:

```text
HOST:PORT:USERNAME:PASSWORD
```

Map the fields as follows:

```text
HOST:PORT → Incogniton "Proxy (IP)"
USERNAME  → Incogniton "Proxy username"
PASSWORD  → Incogniton "Proxy password"
```

![Incogniton enter 006IP proxy details](https://cdn.006ip.com/docs/img/static-proxy/config-tutorial/incogniton-image2.png)

> **Note:** The connection type must match the protocol 006IP actually provides. An incorrect protocol can cause connection failures even when host, port, and credentials are correct.

### 3. Test the proxy connection

After filling in the proxy details, click **Test** at the bottom of the page.

If the result shows **Connected** and displays the egress IP, country/region, and timezone, the 006IP proxy is successfully linked to the Incogniton profile.

![Incogniton test 006IP proxy connection](https://cdn.006ip.com/docs/img/static-proxy/config-tutorial/incogniton-image3.png)

Verify that the detected egress IP matches the proxy information in your 006ip dashboard. If the IP and region look correct, continue with privacy, browser, hardware, extensions, and cookie settings as needed.

### 4. Save and launch the profile

After the proxy test succeeds, click **Create** in the bottom-right corner to save the profile.

Launch the profile from the Incogniton profile list. Once started, network traffic from that environment routes through the configured 006IP proxy.

To double-check, open `https://ipinfo.io` or another IP lookup site inside the Incogniton browser and confirm the displayed egress IP matches your 006IP proxy.

### 5. Troubleshooting

If the proxy test fails in Incogniton, check the following:

| Symptom | What to check |
| --- | --- |
| Cannot connect | Verify host and port, and confirm the 006IP proxy is still active. |
| Authentication failed | Re-check the username and password; avoid trailing spaces when copying. |
| Test times out | Confirm your local network can reach the proxy server. |
| Credentials correct but still fails | Ensure the connection type matches the 006IP proxy protocol. |
| Browser shows local IP after launch | Reopen proxy settings and confirm custom proxy is saved and passed the test. |
| Region mismatch | Confirm the 006IP proxy matches the country/region or city you purchased. |

> UI layout and button names may vary slightly by Incogniton version. Follow your current client UI. Use proxies only for legal/compliant scenarios and follow website terms and local laws.

---

> For issues not covered above, contact support:
>
> - **Telegram**: [https://telegram.me/ip006ip](https://telegram.me/ip006ip)
> - **Phone**: 15673887335
> - **Email**: [support@006ip.com](mailto:support@006ip.com)
>
> For purchase, renewal, and credential export details, see the [006ip Static Proxy User Guide](/static-proxy-user-guide/).
