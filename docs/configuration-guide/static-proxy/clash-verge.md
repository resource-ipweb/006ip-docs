---
sidebar_position: 1
sidebar_label: Clash Verge Configuration Guide
description: Complete guide to configuring 006ip static residential proxies in Clash Verge.
---

# Clash Verge Configuration Guide

***Before using 006ip proxy services, make sure your network can access international resources normally. If you encounter connection issues, check your local network or contact customer support for assistance. [006ip Acceptable Use Policy](https://006ip.com/company/acceptable-use-policy)***

006ip provides residential proxy infrastructure for businesses, developers, and cross-border teams, including **dynamic residential IPs** and **static residential IPs**. The platform supports country/region and city-level targeting, plus dashboard options such as IP allowlists, authentication methods, and location modes—suitable for compliant data collection, localized page testing, price monitoring, ad verification, and maintaining cross-border business environments.

**Static residential IPs** offer long-lived fixed egress addresses and are a better fit when you need continuity and connection stability. This guide walks through registration, trial traffic, purchasing, exporting credentials, and configuring proxies in **Clash Verge**.

> **Need help? Contact us anytime:**
>
> - Telegram: [https://telegram.me/ip006ip](https://telegram.me/ip006ip)
> - Phone: `15673887335`
> - Email: [support@006ip.com](mailto:support@006ip.com)

## Getting Started

### 1. Create and sign in to a 006ip account

Step 1: Open the [006ip website](https://006ip.com), then click **Register** in the top-right corner. If you already have an account, click **Log In**.

![006ip homepage — registration entry](/img/guide/static-proxy/006ip-homepage.png)

Step 2: On the registration page, choose one of the following methods:

#### Option A: Email registration

Select **Email registration**, then enter your account/email, email verification code, password, and confirm password. Click **Send code**, check your inbox for the code, accept the Terms of Service and Privacy Policy, then click **Register now**.

![006ip email registration](/img/guide/static-proxy/006ip-register-email.png)

#### Option B: Phone registration

Select **Phone registration**, confirm the country/region code, enter your phone number, click **Send code**, and enter the SMS code. Accept the Terms of Service and Privacy Policy, then click **Register now**.

After phone registration succeeds, you are signed in automatically with a default password. Set your own login password in account settings as soon as possible.

![006ip phone registration](/img/guide/static-proxy/006ip-register-phone.png)

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

![006ip static proxy — Quick Configuration](/img/guide/static-proxy/006ip-purchase-quick-mode.png)

##### (2) Custom Configuration

Enable **Custom Configuration** to purchase by IP segment and customize **Connections (QPS)**, **Bandwidth**, and **UDP**. You can also set **Use case**, allocate quantity by city/segment inventory, and choose a **Period**. Different settings affect pricing—review the **Order Summary** on the right before submitting.

![006ip static proxy — Custom Configuration](/img/guide/static-proxy/006ip-purchase-custom-mode.png)

#### Step 2: Confirm the order and pay

On the checkout page, selected IP inventory is locked for **15 minutes**. If payment is not completed in time, resources are released and you must place the order again.

Supported payment methods include:

- **Account balance**
- **Online payment**
- **Balance + online** combined payment

If balance is insufficient, the available balance is applied first and the remainder can be paid online. Balance payments require your 006ip payment password. Available online channels and currencies follow the checkout page.

![006ip order confirmation and payment](/img/guide/static-proxy/006ip-order-payment.png)

### 4. View and export proxy connection details

After payment succeeds, open **My IPs** to view purchased static IPs. The list shows bandwidth, QPS, UDP status, expiry, and resource state, and supports renew, disable, enable, and details.

![006ip My IPs list](/img/guide/static-proxy/006ip-my-ip-list.png)

Before configuring Clash Verge, export these four connection fields:

- **Proxy IP address**
- **Port**
- **Username**
- **Password**

On **My IPs**, click **Export Credentials** in the top-right corner and choose a format that fits your client. Clash Verge can use:

```text
IP:PORT:USERNAME:PASSWORD
```

Exported files contain plaintext credentials. Store the file securely and do not share credentials via public chats, screenshots, or untrusted channels.

![006ip export credentials](/img/guide/static-proxy/006ip-export-credentials.png)

For purchase, renewal, and export details, see the [006ip Static Proxy User Guide](/static-proxy-user-guide/) and the latest prompts in the dashboard.

## Configure Clash Verge

This section is written for **Clash Verge**, a Windows / macOS proxy client based on Clash Meta. Its UI and workflow differ from classic Clash—follow the Clash Verge steps below.

Complete the purchase flow above and have your proxy server address, port, username, and password ready.

### 1. Prepare proxy connection details

Confirm you have:

- **Proxy server address**
- **Port**
- **Username**
- **Password**

### 2. Edit the Clash Verge configuration file

Open **Clash Verge** and follow these steps:

**① Create a local YAML file**

Create a text file and paste the content below. Replace placeholders with your real values (keep the English quotation marks):

```yaml
proxies:
  - name: "proxy1"
    type: socks5
    server: your-proxy-server-address
    port: 7778
    username: "your-username"
    password: "your-password"
    udp: true
```

> If Clash Verge already has other configs, merge the `proxies:` section into the existing file and keep your original nodes.

**② Create a profile and import the file**

1. Click **Profiles** in the left sidebar, then click **New** on the right.

![Open Profiles and click New](/img/guide/static-proxy/clash-verge-step1.png)

2. In the **New Profile** dialog:
   - **Type**: `Local`
   - **Name**: `006IP` (or another recognizable name)
   - Click **Choose File** and select the YAML file you created
   - Click **Save**

![Create a local profile and select the file](/img/guide/static-proxy/clash-verge-step2.png)

**③ Review the imported configuration**

After import, right-click the 006IP profile card and choose **Edit File** to view or adjust the proxy settings.

![View / edit YAML configuration](/img/guide/static-proxy/clash-verge-step3.png)

**④ Activate the profile**

Return to Profiles, find the **006IP** card, right-click it, and choose **Use**.

![Right-click the 006IP profile and select Use](/img/guide/static-proxy/clash-verge-step2-5.png)

### 3. Switch to the 006IP proxy node

In the left sidebar, open **Proxies**. Find the **006IP node** (`proxy1`) and select it.

![Select the 006IP node on Proxies](/img/guide/static-proxy/clash-verge-step4.png)

### 4. Enable system proxy and verify

Confirm both:

1. **System proxy is on**: Open **Home** and make sure **System Proxy** is enabled
2. **Correct node is active**: Home should show the selected 006IP node name

![Confirm system proxy and node status on Home](/img/guide/static-proxy/clash-verge-step6.png)

Open a browser and visit `https://ipinfo.io` or another IP lookup site. If the returned IP matches your purchased region, configuration succeeded.

![IPinfo result example](/img/guide/static-proxy/ipinfo-result.png)

> If the check shows your local IP, verify: ① the 006IP node is selected on Proxies; ② system proxy is enabled on Home; ③ placeholders in the YAML file were replaced with real credentials.

### 5. Rule-based split routing (optional)

To send only specific traffic through 006ip while other traffic uses existing nodes or direct connection, add rules:

```yaml
rules:
  - DOMAIN-SUFFIX,target-website.com,proxy1
  - IP-CIDR,10.0.0.0/8,DIRECT
  - MATCH,Proxy
```

Only requests to the target domain (e.g. `target-website.com`) go through the 006ip proxy via `proxy1`; other traffic follows your existing rules.

---

> If you run into issues not covered above, contact us:
>
> - **Telegram**: [https://telegram.me/ip006ip](https://telegram.me/ip006ip)
> - **Phone**: 15673887335
> - **Email**: [support@006ip.com](mailto:support@006ip.com)
>
> For purchase, renewal, and credential export details, see the [006ip Static Proxy User Guide](/static-proxy-user-guide/).
