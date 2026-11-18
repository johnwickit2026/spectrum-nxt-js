# Spectrum International School (SIS) — Hostinger Shared Hosting Deployment Guide

This document provides complete instructions for deploying the Spectrum International School website and administration dashboard on **Hostinger shared PHP hosting** using hPanel.

---

## 1. Hosting Architecture Overview

- **Frontend**: Next.js App Router statically exported (`output: 'export'`) into clean HTML/CSS/JS.
- **Backend**: PHP REST API (PDO with prepared statements, session security, CSRF protection, file upload handler).
- **Database**: MySQL / MariaDB (Importable SQL schema and seed files).
- **Web Server**: Apache / LiteSpeed with `.htaccess` handling HTTPS enforcement, trailing slash URL normalization, and `/api/` routing.

---

## 2. Directory Structure on Hostinger (`public_html/`)

When deploying to Hostinger via FTP or File Manager in hPanel, your `public_html/` should look like this:

```
public_html/
├── .htaccess                 # Apache rewrite rules, HTTPS, and API routing
├── index.html                # Next.js statically exported homepage
├── 404.html                  # Custom 404 page
├── 500.html                  # Custom 500 page
├── sitemap.xml               # Complete search engine sitemap
├── robots.txt                # Search engine crawler instructions
├── _next/                    # Next.js compiled JS and CSS bundles
├── assets/                   # School photographs and local media assets
├── images/                   # Official Spectrum logos and affiliation marks
├── frontend/                 # Statically generated subpages
│   ├── aboutus/index.html
│   ├── apply/index.html
│   ├── admission-procedures/index.html
│   ├── academic-sessions/index.html
│   ├── prospectus/index.html
│   ├── online-payment/index.html
│   ├── waiver/index.html
│   ├── curriculum/index.html
│   ├── campus-facilities/index.html
│   ├── library/index.html
│   ├── ict-lab/index.html
│   ├── science-lab/index.html
│   ├── sports-club/index.html
│   ├── language-club/index.html
│   ├── study-tour/index.html
│   ├── field-trip/index.html
│   ├── notices/index.html
│   ├── events/index.html
│   ├── blogs/index.html
│   ├── photo-gallery/index.html
│   ├── video-gallery/index.html
│   ├── contact/index.html
│   ├── appointment-ceo/index.html
│   ├── feedback/index.html
│   ├── faq/index.html
│   ├── career/index.html
│   └── ...
├── digiadmin/                # Admin Panel SPA
│   └── index.html
└── api/                      # PHP REST API Backend
    ├── config.php            # Hostinger database credentials
    ├── db.php                # PDO connection with prepared statements
    ├── helper.php            # Security, headers, auth check, logging
    ├── settings.php          # Public site settings endpoint
    ├── notices.php           # Filterable notices API
    ├── events.php            # Event listings API
    ├── blogs.php             # Blog posts with pagination
    ├── gallery.php           # Photo albums & gallery API
    ├── staff.php             # Staff directories API
    ├── careers.php           # Careers API
    ├── contact.php           # Contact form processor
    ├── feedback.php          # Feedback form processor
    ├── appointment.php       # CEO appointment form processor
    ├── uploads/              # Uploaded media directory (chmod 755)
    └── admin/                # Admin CRUD & authentication endpoints
        ├── login.php
        ├── logout.php
        ├── check-auth.php
        ├── dashboard.php
        ├── settings.php
        ├── upload.php
        ├── blogs.php
        ├── notices.php
        ├── events.php
        ├── gallery.php
        ├── staff.php
        ├── careers.php
        ├── submissions.php
        └── activity-logs.php
```

---

## 3. Step-by-Step Deployment Instructions

### Step 1: Create MySQL Database in Hostinger hPanel

1. Log in to your Hostinger hPanel.
2. Navigate to **Databases** → **Management**.
3. Create a new MySQL database:
   - **Database Name**: e.g., `u123456789_spectrum_sis`
   - **Username**: e.g., `u123456789_sis_admin`
   - **Password**: Choose a strong password (e.g., `SpectrumSIS@2026`)
4. Note down the Database Name, Username, and Password.

### Step 2: Import Database Schema and Seed Data

1. In hPanel, click **Enter phpMyAdmin** next to your newly created database.
2. Click the **Import** tab.
3. Choose file: Select `database/schema.sql` and click **Go**.
4. Next, choose file: Select `database/seed.sql` and click **Go**.
5. All 22 tables will be populated with official Spectrum International School data.

### Step 3: Configure Database Credentials in `api/config.php`

Open `api/config.php` and update the database definitions:

```php
define('DB_HOST', 'localhost');
define('DB_NAME', 'u153132463_johnwick');
define('DB_USER', 'u153132463_nxtjs');
define('DB_PASS', '!0^09+S;2t2U1ij+');
```

Ensure the `api/uploads/` directory has write permissions (`chmod 755` or `chmod 775`).

### Step 4: Build Static Next.js Frontend

On your local workstation or CI/CD, run:

```bash
npm run build
```

This generates an `out/` folder containing the static HTML/CSS/JS export.

### Step 5: Upload Files to `public_html/`

Using FTP (FileZilla) or Hostinger File Manager:
1. Copy all contents of the `out/` folder directly into `public_html/`.
2. Copy the entire `api/` folder into `public_html/api/`.
3. Copy the `.htaccess` file directly into `public_html/.htaccess`.

---

## 4. Default Admin Credentials

- **Admin Login URL**: `https://spectrumintlschool.com/digiadmin`
- **Default Username**: `superadmin`
- **Default Password**: `Admin@SIS2026`

*Note: For production security, change this password immediately after your first login via the admin settings panel.*

---

## 5. Verification Checklist

- [x] Homepage loads at `https://spectrumintlschool.com/`
- [x] All `/frontend/...` inner routes load with HTTP 200 without redirect errors
- [x] Admission popup opens on the homepage with smooth animation
- [x] Contact, CEO appointment, and Feedback forms submit and store in the database
- [x] Admin login at `/digiadmin` authenticates securely
- [x] Global admission switch toggles between OPEN and CLOSED
- [x] Online fee payment guidelines show the 7:00 AM – 5:00 PM operating window
