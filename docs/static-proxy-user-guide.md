---
sidebar_position: 3
slug: /static-proxy-user-guide
description: 006ip static proxy user guide — purchase static residential proxies, manage purchased IPs, renew subscriptions, export credentials, and test connectivity.
---

# 006ip Static Proxy User Guide

## 1. How to purchase static residential proxies?

Log in to the 006ip dashboard, open **Static Proxy** in the left sidebar, then select **Plan Purchase**. On this page you can configure and purchase static proxy resources. Follow the steps below:

### 1.1 Basic proxy attributes

![Static proxy purchase — basic attributes](/img/static-proxy/purchase-basic-attributes.png)

When purchasing static proxies, start by configuring the basic attributes. The system updates pricing and inventory in real time based on your selections:

- **Exclusivity level:** Choose between **Shared** and **Dedicated** allocation. **Shared IPs** suit cost-sensitive, general browsing workloads. **Dedicated IPs** (limited to 1–2 users) offer higher environment purity and stability for scenarios with strict IP isolation requirements.

- **IP quality tier:** Three tiers — **Basic**, **Standard**, and **Premium**. Match the tier to your target platform requirements and expected network quality.

- **Business use case:** To maximize success rates, the platform optimizes routing for popular scenarios. Select common options (e.g. TikTok, Google, Amazon, eBay) or expand **More use cases** to browse the full catalog and ensure the assigned IP pool fits your workload.

### 1.2 IP configuration (three purchase modes)

You can purchase by city, by IP segment, or by specific IP.

#### Purchase by city

![Static proxy purchase — by city](/img/static-proxy/purchase-by-city.png)

- **Multi-region bundles:** Add multiple countries or regions in the location module to purchase cross-region resources in one order.

- **Precise geo targeting:** For each selected country, choose a **Fixed city** for exact coverage or **Random range** for country-wide distribution.

- **Quantity per region:** Enter the number of IPs needed on each city or random-range card. The system calculates pricing and locks available inventory.

#### Purchase by IP segment

![Static proxy purchase — by IP segment](/img/static-proxy/purchase-by-ip-segment.png)

- **Select target countries:** Add one or more countries or regions based on your deployment needs.

- **Segment filtering:** After selecting a country, the system lists all available IP subnets. Expand **Refined filter** to search or select cities for more precise segment filtering.

- **Allocate by segment:** On each segment card, review subnet details and available stock, then enter the quantity to purchase from that segment.

#### Purchase by specific IP

![Static proxy purchase — by specific IP](/img/static-proxy/purchase-by-specific-ip.png)

- **Lock target region:** First select the country where you need to deploy.

- **Switch subnet:** The panel loads the first available subnet and its IP list. Use the subnet dropdown to search and switch to the segment you need.

- **Pick individual nodes:** Available IPs are shown as cards. Click the IP you want to add it to your order for node-level precision.

### 1.3 Advanced options and order summary

Advanced options affect the final price.

![Static proxy purchase — advanced config and order summary](/img/static-proxy/purchase-advanced-config.png)

- **Bandwidth:** Choose peak rates such as 5 Mbps, 10 Mbps, or **Unlimited**, based on your throughput needs.

- **Concurrent connections (QPS):** Presets include 100, 500, and 1000, with a **Custom** option for high-concurrency workloads.

- **UDP support:** Disabled by default. Enable it if your application requires real-time data or UDP-based protocols (additional fees apply).

- **Subscription duration:** Plans from 7 to 365 days. Longer terms (e.g. 90 or 365 days) include tiered discounts.

The **Order Summary** panel on the right aggregates all selected attributes and advanced settings, broken down by country/region. After duration discounts are applied, the final **Payment amount** is shown. Click **Pay Now** to proceed to checkout.

### 1.4 Order confirmation

- Selected IP resources are reserved for **15 minutes** on the checkout page. Unpaid orders release the reservation when the lock expires.

- Payment methods include account balance, online payment, and combined balance + online payment. Balance payment requires your platform payment password.

![Static proxy — order confirmation and payment](/img/static-proxy/order-confirm.png)

**Inventory lock:** On the checkout page, the system locks the configured proxy IPs in the network pool for 15 minutes. If payment is not completed in time, the batch is released automatically.

**Flexible payment:** Use account balance, online payment, or a combination. When balance is insufficient, the full available balance is applied first and the remainder can be paid via online channels (e.g. USDT, WeChat Pay, Alipay). Balance deductions require your payment password.

**Payment status sync (WeChat combined payment example):**

1. Select **WeChat Pay** on the payment panel and pay the remaining amount to generate a QR code.

2. After paying on mobile, click **Paid** in the dashboard to trigger a status update.

3. A **Payment status** dialog queries the gateway. When the response is **Payment successful**, resources are provisioned.

4. Click **View My IPs** in the dialog to open the control panel and deploy your proxy nodes.

![Static proxy — WeChat payment flow](/img/static-proxy/payment-wechat.png)

![Static proxy — payment success](/img/static-proxy/payment-success.png)

---

## 2. View purchased static IPs

Open **My IPs** to see all purchased IPs. You can renew, disable, enable, export credentials, and more.

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
