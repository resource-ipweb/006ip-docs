---
sidebar_position: 4
slug: /new-open-platform/purchase
description: Purchase APIs — options, quote, place and pay.
---

# Purchase

Requires `UserId` and `Token`.

| Method | Path | Description |
|--------|------|-------------|
| GET | `/open/staticip/purchase/options` | Purchase configuration options |
| POST | `/open/staticip/purchase/quote` | Quote (no order created) |
| POST | `/open/staticip/purchase/orders/place-and-pay` | Create order and pay with wallet balance |

Recommended flow: `options` → `inventory` → `quote` → `place-and-pay`.

Use `X-Idempotency-Key` on place-and-pay. Pass `quoteId` and `quoteVersion` from the quote response.

Common errors: `60004` insufficient balance; `60306`–`60309` order/idempotency related.

See 中文 docs for `config`, `quotaItems`, `segmentItems`, and `specificIpItems` structures.
