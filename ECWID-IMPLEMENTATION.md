# Ecwid Implementation Plan for Ardent Leatherworks

## Overview

Add Ecwid e-commerce to the existing static 11ty site, maintaining full design control while gaining:
- Cart/checkout functionality
- Inventory management
- PayPal + card payments
- Instagram Shop integration
- In-person POS (via Square)
- Etsy sync capability

---

## Phase 1: Account Setup (Cody)

### 1.1 Create Ecwid Account
- Go to: https://www.ecwid.com/
- Sign up with business email (contact@ardentleatherworks.com)
- Start with Free tier (up to 5 products)

### 1.2 Initial Store Configuration
In Ecwid dashboard:
- **Store name**: Ardent Leatherworks
- **Currency**: USD
- **Location**: Austin, Texas
- **Tax settings**: Texas sales tax (automatic collection available)

### 1.3 Payment Setup
- Enable **Stripe** (primary card processor)
- Enable **PayPal** (buyer preference option)
- Both integrate directly in Ecwid dashboard

---

## Phase 2: Product Setup (Cody + Demi)

### 2.1 Create Belt Product

**Product: Ardent Belt**
- **Base price**: $XXX (TBD)
- **Variants** (dropdown):
  - Natural (undyed)
  - Aima (oxblood)
  - Thanatochromia (near-black purple)
  - Aporia (verdigris green)
- **Options**:
  - Waist size: Custom measurement field
  - Width: 1.25" / 1.5"
  - Buckle finish: Solid brass (default)

### 2.2 Product Description
(Copy from existing site, formatted for Ecwid)

### 2.3 Product Images
- Main image (hero shot)
- Detail shots (stitching, edge, buckle)
- Dye color swatches
- Scale/fit reference

---

## Phase 3: Site Integration (Demi)

### 3.1 Add Ecwid Script to Base Template

In `src/_includes/base.njk`, before `</body>`:

```html
<!-- Ecwid Store -->
<script data-cfasync="false" type="text/javascript" src="https://app.ecwid.com/script.js?STORE_ID&data_platform=code"></script>
```

### 3.2 Update Product Page

In `src/products/belt.md`, add buy button:

```html
<div id="my-store-STORE_ID"></div>
<script>
  xProductBrowser("id=my-store-STORE_ID", "productId=PRODUCT_ID", "categoriesPerRow=1", "views=product");
</script>
```

OR simpler "Add to Cart" button:

```html
<div class="ec-cart-widget" data-product-id="PRODUCT_ID"></div>
```

### 3.3 Add Cart Icon to Navigation

In `base.njk` header:

```html
<div class="ec-cart-mini" data-responsive="true"></div>
```

### 3.4 Style Customization

Add to `style.css`:

```css
/* Ecwid Customization - Match Ardent Aesthetic */
.ec-cart-widget {
  font-family: var(--font-body) !important;
}

.ec-cart-mini {
  /* Cart icon styling */
}

/* Override Ecwid defaults to match our palette */
:root {
  --ecwid-primary-color: #1C1917;
  --ecwid-background-color: #F7F3E8;
}
```

Ecwid also has CSS customization in dashboard for deeper theming.

---

## Phase 4: Sales Channels (After Launch)

### 4.1 Instagram Shop
- In Ecwid: Sales Channels → Instagram
- Connect Instagram Business account
- Sync products
- Enable shopping tags in posts

### 4.2 Etsy Sync
- Install Ecwid app: "Etsy Integration" or use Trunk/Sellbrite
- Two-way inventory sync
- Order management in one place

### 4.3 In-Person POS
- Ecwid integrates with Square POS
- Or use Ecwid's own POS app on tablet
- Inventory syncs across online + in-person

---

## Phase 5: Shipping & Fulfillment

### 5.1 Shipping Settings
- Flat rate shipping (recommended for belts)
- Or real-time USPS/UPS rates
- Free shipping threshold option

### 5.2 Order Notifications
- Customer emails (customizable templates)
- Seller notifications to contact@ardentleatherworks.com

---

## Implementation Checklist

**Cody:**
- [ ] Create Ecwid account
- [ ] Set up Stripe in Ecwid
- [ ] Set up PayPal in Ecwid
- [ ] Create belt product with variants
- [ ] Add product photography
- [ ] Set pricing
- [ ] Configure shipping
- [ ] Configure Texas tax

**Demi:**
- [ ] Add Ecwid script to base template
- [ ] Create buy button component
- [ ] Add cart to navigation
- [ ] Style Ecwid elements to match site
- [ ] Test checkout flow
- [ ] Deploy to production

---

## Upgrade Path

| Stage | Ecwid Plan | Monthly | Features |
|-------|-----------|---------|----------|
| Launch | Free | $0 | 5 products, basic checkout |
| Growth | Venture | $19 | Unlimited products, Instagram/FB |
| Scale | Business | $39 | POS, abandoned cart, advanced |

---

## Resources

- Ecwid for Static Sites: https://support.ecwid.com/hc/en-us/articles/207806045
- Ecwid CSS Customization: https://developers.ecwid.com/api-documentation/customize-appearance
- Ecwid + Eleventy examples: Search "ecwid 11ty integration"

---

*Created: 2025-01-29*
