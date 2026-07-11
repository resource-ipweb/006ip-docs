---
sidebar_position: 3
slug: /static-proxy-user-guide
description: 006ip static proxy user guide — purchase static residential proxies, manage purchased IPs, renew subscriptions, export credentials, and test connectivity.
---

# 006ip Static Proxy User Guide

## 1. How to purchase static residential proxies?

Log in to the 006ip dashboard, open **Static Proxy** in the left sidebar, then choose **Static Residential Native IP** or **Static Residential Broadcast IP** to enter the purchase page. On this page you can configure and purchase static proxy resources. Follow the steps below:

### 1.1 Proxy attribute settings

![Static proxy purchase — attribute settings](/img/static-proxy/proxy-attribute-settings.png)

- **Exclusivity level:** Choose between **Dedicated** and **Shared** allocation. **Dedicated IPs** offer higher environment purity and stability for workloads with strict IP isolation requirements. **Shared IPs** suit cost-sensitive, general browsing scenarios.

- **Precise geo targeting:** Select country/region and a specific city for exact coverage, or choose **Random range** for country-wide distribution.

- **Subscription duration:** Plans from 30 to 365 days. Longer terms (e.g. 90 or 365 days) include tiered discounts.

- **Fixed configuration:** Concurrent connections (QPS), port bandwidth, and UDP support use fixed default settings. Refer to the values shown on the platform page for the actual configuration.

The **Order Summary** panel on the right aggregates your selections. Enter the number of IPs in the quantity field; the system validates inventory and calculates pricing. After discounts are applied, the final **Payment amount** is shown. Click **Pay Now** to proceed to checkout.

### 1.2 Order payment

- Selected IP resources are reserved for **15 minutes** on the checkout page. Unpaid orders release the reservation when the lock expires.

- Payment methods include account balance, online payment, and combined balance + online payment. Balance payment requires your platform payment password.

![Static proxy — order confirmation and payment](/img/static-proxy/order-confirm.png)

**Inventory lock:** On checkout, the system locks the configured proxy IPs in the network pool for 15 minutes. If payment is not completed in time, the batch is released automatically.

**Flexible payment:** Use account balance, online payment, or a combination. When balance is insufficient, the full available balance is applied first and the remainder can be paid via online channels (e.g. USDT, WeChat Pay, Alipay). Balance deductions require your payment password.

---

## 2. View purchased static IPs

After payment succeeds, open **My IPs** to see all purchased IPs. You can renew, disable, enable, export credentials, and more.

![Static proxy — My IPs list](/img/static-proxy/my-ip-list.png)

**Node status monitoring:** The list shows bandwidth, QPS, UDP status, and lifecycle state (available, disabled, expiring soon, expired retention, etc.).

**Lifecycle management:** From the actions column, **Renew** to extend authorization, **Disable / Enable** to block or restore connectivity, or open **Details** for network information.

**Credential export:** Click **Export Accounts** in the top-right corner to batch-download authentication details (username/password) for integration with your automation stack.

### Auto-renewal

![Static proxy — auto-renewal settings](/img/static-proxy/auto-renewal.png)

Enable auto-renewal and set a trigger threshold (e.g. renew 3 days before expiry). The system deducts your account balance and extends authorization automatically, reducing the risk of accidental release due to missed manual renewals.

### Manual renewal

![Static proxy — manual renewal](/img/static-proxy/manual-renewal.png)

Use **Manual renewal** for one-off extensions. In the dialog, select a **Renewal period** (e.g. 30 days). The system calculates the estimated amount based on selected nodes and duration.

### Export static IP credentials

![Static proxy — export account credentials](/img/static-proxy/export-credentials.png)

For large-scale deployment and automation, export connection credentials for selected nodes:

- **Start export:** Click **Export Accounts** on the list page. By default, the export scope follows your current filters.

- **Choose output format:** Use the **Proxy format** dropdown to match third-party tools or scripts (e.g. `IP:PORT:USERNAME:PASSWORD`).

- **Security verification:** Exported files contain plaintext IPs, ports, and credentials. Enter your account **login password** to verify identity (logged in the audit trail), then click **Confirm export**.

---

## 3. Test static IP connectivity

After obtaining credentials, verify connectivity and egress IP from your local terminal using `curl`:

### IPv4 test commands

```bash
# http
curl -x http://username:password@IP:PORT https://ifconfig.co

# socks5
curl -x socks5h://username:password@IP:PORT https://ifconfig.co
```

![Static proxy — IPv4 connectivity test](/img/static-proxy/ipv4-connectivity-test.png)

Replace `username:password@IP:PORT` with your actual credentials. If connectivity and authentication succeed, the terminal returns the proxy's egress IP from the test site (e.g. ifconfig.co). Confirm it matches your purchased node IP.

### IPv6 test commands

```bash
# http
curl -x http://username:password@[IPv6]:PORT https://v6.ipinfo.io

# socks5
curl -x socks5h://username:password@[IPv6]:PORT https://v6.ipinfo.io
```

![Static proxy — IPv6 connectivity test](/img/static-proxy/ipv6-connectivity-test.png)

Replace the placeholders with your node credentials. On success, the proxy forwards the request to an IPv6-only test endpoint (e.g. `v6.ipinfo.io`) and returns a JSON snapshot including egress IPv6 address, city, ASN, and related network details.
