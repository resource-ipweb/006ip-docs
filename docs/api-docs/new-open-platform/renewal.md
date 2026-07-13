---
sidebar_position: 5
slug: /new-open-platform/renewal
description: Renewal APIs — quote and place-and-pay.
---

# Renewal

Requires `UserId` and `Token`.

`resourceIds` are user static IP primary keys (`t_static_user_ip.id`) from [My IPs](/new-open-platform/ips).

| Method | Path | Description |
|--------|------|-------------|
| POST | `/open/staticip/renewals/quote` | Renewal quote |
| POST | `/open/staticip/renewals/orders/place-and-pay` | Create renewal order and pay (wallet) |

Body: `resourceIds` (string array) + `periodDays` (e.g. 30, 60, 90, 180, 365).

Recommend `X-Idempotency-Key` on place-and-pay.
