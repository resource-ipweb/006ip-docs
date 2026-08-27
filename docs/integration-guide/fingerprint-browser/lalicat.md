---
sidebar_position: 10
sidebar_label: Lalicat Fingerprint Browser Guide
description: Complete guide to configuring 006ip static residential proxies in Lalicat.
---

# Lalicat Fingerprint Browser — 006IP Proxy Guide

***Before using 006IP proxy services, make sure your network can access overseas resources normally. If you have connection issues, check your local network or contact support.***

006ip provides residential proxy infrastructure for businesses, developers, and cross-border teams, including **dynamic residential IPs** and **static residential IPs**. The platform supports country/region and city-level targeting, plus dashboard options such as IP allowlists, authentication methods, and location modes—suitable for compliant data collection, localized page testing, price monitoring, ad verification, and maintaining cross-border business environments.

**Static residential IPs** offer long-lived fixed egress addresses and are a better fit when you need continuity and connection stability. This guide walks through registration, trial traffic, purchasing, exporting credentials, and configuring 006IP proxies in **Lalicat**.

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

Before configuring Lalicat, prepare these four connection fields:

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

## Configure Lalicat

After obtaining the 006IP proxy server address, port, username, and password, add the proxy to a Lalicat browser profile.

### 1. Create a browser profile

Open **Lalicat Fingerprint Browser**, go to **Browser List** in the left sidebar, then click **+ Add Browser**.

![Lalicat add browser](https://cdn.006ip.com/docs/img/static-proxy/config-tutorial/lalicat-1.png)

### 2. Enter 006IP proxy details

On the new profile page, set the display name, group, browser version, User-Agent, and other basic options as needed. Under **Basic Configuration**, find **Proxy Settings** and select the protocol matching your 006IP proxy, such as `HTTP`, `HTTPS`, or `SOCKS5`.

| Lalicat field | What to enter |
| --- | --- |
| **IP Address** | Enter the 006IP proxy host. |
| **Port** | Enter the corresponding proxy port. |
| **Login User** | Enter the 006IP proxy username. |
| **Login Password** | Enter the corresponding password. |

You can also use **Paste Proxy Information** on the right. Lalicat accepts:

```text
IP:PORT:USERNAME:PASSWORD
```

For 006IP credentials exported as:

```text
HOST:PORT:USERNAME:PASSWORD
```

Use this mapping:

```text
HOST      → Lalicat "IP Address"
PORT      → Lalicat "Port"
USERNAME  → Lalicat "Login User"
PASSWORD  → Lalicat "Login Password"
```

![Lalicat enter 006IP proxy details](https://cdn.006ip.com/docs/img/static-proxy/config-tutorial/lalicat-2.png)

> **Note:** The proxy protocol selected in Lalicat must match the protocol actually used by the 006IP proxy.

### 3. Check the proxy connection

Click **Check Network**. A successful test displays a green result with the country/region, state/province, and city.

If it fails, first check the protocol, IP address, port, login user, password, and whether the 006IP proxy is still active.

![Lalicat check 006IP proxy connection](https://cdn.006ip.com/docs/img/static-proxy/config-tutorial/lalicat-3.png)

After the test passes, finish any other browser settings.

### 4. Save and launch the profile

Click **Save** in the bottom-right corner. Return to **Browser List**, find the profile, and launch it to access the network through the configured 006IP proxy.

To double-check, open `https://ipinfo.io` or another IP lookup site and confirm the displayed egress IP matches.

### 5. Troubleshooting

| Symptom | What to check |
| --- | --- |
| Cannot connect to proxy | Check the IP address and port, and confirm the proxy is still active. |
| Authentication failed | Re-check the login user and password, avoiding copied spaces. |
| Network check fails | Confirm your local network can reach the proxy server. |
| Credentials entered but proxy still fails | Confirm Lalicat's selected protocol matches the 006IP protocol. |
| Browser shows the local IP after launch | Confirm the proxy was saved and passed **Check Network**. |
| Detected region does not match | Confirm the proxy is for the country/region or city you purchased. |

> UI layout and button names may vary slightly by Lalicat version. Follow your current client UI. Use proxies only for legal/compliant scenarios and follow website terms and local laws.

---

> For issues not covered above, contact support:
>
> - **Telegram**: [https://telegram.me/ip006ip](https://telegram.me/ip006ip)
> - **Phone**: 15673887335
> - **Email**: [support@006ip.com](mailto:support@006ip.com)
>
> For purchase, renewal, and credential export details, see the [006ip Static Proxy User Guide](/static-proxy-user-guide/).
