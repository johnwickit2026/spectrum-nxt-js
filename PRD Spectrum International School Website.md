# PRD: Spectrum International School Website

Nov 17, 2026 · @Qudddus

## Overview

This PRD defines the requirements for the Spectrum International School (SIS) website at spectrumintlschool.com: a fully working, mobile-friendly informational and admissions site hosted on Hostinger PHP, replacing the previous CDN-hosted version.

**Background.** SIS is an English-medium school in Shantinagar, Dhaka, offering Pearson Edexcel and Cambridge pathways alongside Islamic studies and Hifzul Quran. The current public site has about 60 pages across seven menu groups: Home, About Us, Our Projects, School Facilities, Admission, Media & Publication, and Login.

**Problem.** After the move from a CDN to Hostinger, only the homepage loads reliably; inner pages (for example /frontend/aboutus) fail. Beyond routing, the audit found content defects: Lorem Ipsum blocks on the curriculum page, conflicting student and staff counts, a gallery mislabeled for another site, and an unlabeled /digiadmin link in public markup.

**Product summary.** One site that lets prospective parents learn about SIS, apply, and pay; lets current families read notices and events; and lets staff update content without developer help.

## Goals, non-goals and success metrics

The site succeeds when every public page loads, admissions and payment paths are one click from any page, and staff can publish updates alone.

**Goals**

- Restore all inner pages and keep the URL structure (/frontend/...) so existing links, prospectus references and search results keep working.
- Make admissions the primary conversion: prospectus, procedures, application and fee payment reachable from the header and footer.
- Publish one consistent set of facts: contact details, enrollment figures, accreditation claims, academic calendar.
- Let non-developers edit notices, events, blog posts, galleries and page text.

**Non-goals**

- Building the Eximus Education application and login portal (stays external).
- Building the online payment gateway itself; the site only presents payment information and the Pay Now entry point.
- Rebuilding School of Integrated Thoughts, which is a separate Netlify site.

| Metric | Target |
| --- | --- |
| Public pages returning HTTP 200 | 100% of sitemap URLs |
| Mobile page load (LCP) | Under 2.5 s on 4G |
| Lighthouse accessibility score | 90 or higher |
| Admission funnel | Track clicks to prospectus, application and payment |
| Content freshness | Notices and events updated at least monthly |
| Placeholder or conflicting content | Zero at launch |

## Users and key needs

Five user groups drive the design; prospective parents matter most because admissions is the site's main job.

| User | Main needs | Key pages |
| --- | --- | --- |
| Prospective parents | Curriculum, fees, age eligibility, intake dates, how to apply, waivers | Academic Curriculum, Admission Procedures, Academic Sessions, Waiver, Prospectus PDF |
| Current parents | Pay fees, read notices, see events, contact the school | Online Payment, Notices, Events, Contact Us |
| Students | Log in to the portal, check notices and results | Student Login, Notices |
| Teachers and staff | Log in, view announcements, find careers | Teachers & Employee Login, Career |
| Management and content editors | Update pages, notices, events, blogs, galleries without a developer | Admin panel (/digiadmin, access-controlled) |

Most visitors are in Bangladesh and likely on mobile, so the site must work well on mid-range phones and slower connections.

## Scope and site architecture

The launch scope is the seven-group menu below, with every existing URL preserved. Pages marked external are linked, not built.

| Section | Pages | Notes |
| --- | --- | --- |
| Home | / | Hero with admissions promotion, school intro, facility highlights, CEO message, Play & Learn, vision/mission/philosophy, events, gallery, testimonials, stats, partner logos |
| About Us | SIS In Brief, Management Committee, Advisor Committee, Sharia Committee, Founder & CEO, Academic Head, Academic Team, Non Academic Team, Support Team, Recognition in Details | Leadership and staff directories |
| About Us (communication) | Notices, Appointment with CEO, Feedback, FAQ, Contact Us | Notices are searchable and filterable by category |
| About Us (values) | Child Friendly Environment, Real-Time Education, Well-Built Infrastructure, Professional Staff Members, Teachers & Faculty, Committed to Fun-Filled Education | Linked from homepage highlights |
| Our Projects | Spectrum EduCare, Senior Citizen Care Home, School of Integrated Thoughts (external, Netlify) |  |
| School Facilities | Academic Curriculum, School Campus Facilities, Library, ICT Lab, Science Lab, Sports Club, Study Tour/Field Trip, Language Club, Study Tour, Field Trip | Last three reached from footer |
| Admission | Prospectus PDF, Academic Sessions, Admission Procedures, Get Started / Apply Online, Online Payment, Waiver & Financial Scholarships, Admission Form (external, Eximus) |  |
| Media & Publication | Blogs, Photo Gallery, Video Gallery, Events (list and detail), Career |  |
| Login | Management, Teachers & Employee, Student (all external, Eximus) |  |

The shared header carries contact details and social links; the shared footer carries the address, two mobile numbers, enrollment shortcuts and academic quick links.

## Functional requirements

Priority: P0 must ship at launch, P1 should ship at launch, P2 can follow.

| ID | Requirement | Priority |
| --- | --- | --- |
| FR-1 | Every page in the sitemap resolves at its existing /frontend/... URL, with a custom 404 page for unknown routes | P0 |
| FR-2 | Primary menu with dropdowns for the seven groups; mobile menu collapses to a hamburger; breadcrumbs on inner pages | P0 |
| FR-3 | Admissions hub: prospectus PDF download, Academic Sessions, Admission Procedures (age guide, entry tests, documents, fees), Apply Online | P0 |
| FR-4 | Admission Form and all three logins open the external Eximus Education portal in the same or a new tab, clearly labeled | P0 |
| FR-5 | Online Payment page shows the Pay Now action, the 7:00 AM to 5:00 PM payment window and both payment helplines | P0 |
| FR-6 | Notices list with search, category filter (class, examination, results, admission, holidays, events), date and Read More detail view | P0 |
| FR-7 | Events list and detail pages (for example Girls Hifz Department, Orientation Program, Book Festival) | P1 |
| FR-8 | Blog list with pagination, categories, excerpts and detail pages | P1 |
| FR-9 | Photo gallery and video gallery, with correct collection titles | P1 |
| FR-10 | Contact Us form, Appointment with CEO form and Feedback form, with server-side validation, spam protection and email delivery to the school inbox | P0 |
| FR-11 | Career page listing open jobs with a way to apply | P1 |
| FR-12 | Staff directories (Academic, Non Academic, Support) and committee pages with photos and roles | P1 |
| FR-13 | Admin panel at an access-controlled route; capabilities are listed in Admin panel requirements below. Staff and student logins are not part of it | P0 |
| FR-14 | Social links (Facebook, YouTube, LinkedIn) in header and footer; click tracking on prospectus, apply and pay actions | P1 |
| FR-15 | Bangla language toggle for core pages | P2 |

## Admin panel requirements

Authorized admins manage the site's key visuals, admissions and publishing from one login, without a developer.

| ID | Capability | Behavior | Priority |
| --- | --- | --- | --- |
| AD-1 | Secure admin login | Access-controlled route; unauthorized users see no admin links; failed logins are rate limited | P0 |
| AD-2 | Change website images | Admin can replace images across the site (logo, banners, section images, page images) by uploading new files; old versions are kept so a change can be undone | P0 |
| AD-3 | Change hero section video | Admin uploads a new hero video or sets a video link; a fallback poster image shows while it loads or when video cannot play | P0 |
| AD-4 | Enable or disable admission | One on/off switch for admissions. When on, the admission popup and Apply buttons are live; when off, the popup is hidden and Apply buttons show a closed message or point to contact details | P0 |
| AD-5 | Admission popup | When admission is on, a popup appears on the homepage with a short message and an Apply Now button linking to the application form. Admin edits its text, image and link. It can be closed, stays closed for the visitor's session, and does not cover the screen on mobile | P0 |
| AD-6 | Publish blogs | Admin creates, edits, schedules, unpublishes and deletes blog posts with title, cover image, category, excerpt and body | P0 |
| AD-7 | Update gallery pictures | Admin adds, removes, reorders and captions photos in the photo gallery, and can organize them into albums | P0 |
| AD-8 | Other content | Admin also manages notices, events, video gallery entries, career listings, staff directory entries and page text | P1 |
| AD-9 | Activity log | Record who changed what and when for key actions, including the admission switch | P2 |

**Rules**

- Uploaded images are resized and compressed automatically to protect page speed.
- Changes go live immediately after saving, with a preview option for the hero and popup.
- The admission switch changes the popup and every Apply action together, so the site never shows conflicting states.

## Content requirements and known issues

Seven content defects on the current site must be fixed or decided by the school before launch.

| Issue | Where | Required action |
| --- | --- | --- |
| Lorem Ipsum placeholder in repeated Pre Section blocks | Academic Curriculum | Replace with approved copy or remove the blocks |
| Student and teacher counts conflict (800+ students and 110+ teachers on the homepage; 500+ students and 200 teachers and staff in About text) | Home, SIS In Brief | School confirms one dated figure; use it everywhere |
| About text refers to expansion plans for 2025 | SIS In Brief | Update or remove the outdated statement |
| Photo gallery headed "Life and activities at School of Integrated Thoughts" | Photo Gallery | Retitle for SIS or split into two galleries |
| Hidden second footer with unrelated EBIStudy links and placeholder newsletter text | Homepage source | Delete the legacy footer |
| Additional phone 0248318285 shown in header and Contact Us but not in the footer | Footer | School confirms whether it is current; make all three places match |
| Unlabeled /digiadmin link in public homepage markup | Homepage source | Remove from public markup; protect the route |

**Fixed facts to display consistently**

- Address: Khadem Tower, 41/1 Shantinagar, Dhaka 1217, Bangladesh
- Email: spectrumintlschool@gmail.com
- Mobiles: +880 1799-369685 and +880 1730-369686
- Academic year: July to June for Play Group through Class VIII; A Level intakes around January/February and July/August
- Accreditation claims (British Council, Edexcel, Ministry of Education) come from the school's own footer; the school must confirm they are current before they stay.
- The 7:00 AM to 5:00 PM window applies to online payment only, not to office hours.

## Design and brand requirements

The redesign keeps the current warm orange, purple and green identity on light backgrounds, taken from the existing site stylesheet.

| Token | Hex | Use |
| --- | --- | --- |
| Burnt orange | #BF5700 | Top contact bar |
| Bright orange | #FC800A | Links, active states, highlights, some buttons |
| Purple | #92278F | Section labels, headings, some buttons |
| Pink-purple | #DD70DA | Selected button accents |
| Green | #8AB326 | Borders and small highlights |
| Navy | #171E45 | Dark interface accents, branding |
| Cream | #FBF1E3 | Decorative section backgrounds |
| Warm gray | #EBE8E2 | Dropdowns, decorative backgrounds |
| White | #FFFFFF | Main page background |
| Dark gray | #444444 | Body text |

- Orange leads navigation and calls to action; purple is the secondary accent; green adds contrast sparingly.
- Check text contrast: bright orange (#FC800A) on white is below the 4.5:1 WCAG AA ratio for body text, so use it for large text, icons and button fills with dark text, and use #BF5700 or darker for orange text links.
- Reusable components: top contact bar, sticky header with dropdown menu, hero banner, card (notice, event, blog, staff), accordion for FAQ, form fields, footer.
- Typography: one readable sans-serif family with a heading and body scale; to be chosen at design kickoff.

## Non-functional requirements

The site runs on Hostinger shared PHP hosting, so every requirement below must be met within that environment.

| Area | Requirement |
| --- | --- |
| Hosting and routing | PHP site on Hostinger with a front controller and .htaccess rewrite rules so /frontend/... routes reach the app; HTTPS forced; www and non-www redirect to one host |
| Performance | LCP under 2.5 s on 4G; compressed, lazy-loaded images (WebP); gzip or Brotli; browser caching; PDFs served as static files |
| SEO | Unique title and meta description per page, XML sitemap, robots.txt, canonical URLs, Open Graph tags, School structured data with address and phone |
| Accessibility | WCAG 2.1 AA: keyboard navigation, alt text, form labels, sufficient contrast |
| Security | Admin route behind login with strong passwords and rate limiting; CSRF protection and input validation on all forms; no admin links in public markup; regular backups |
| Reliability | Uptime monitoring with alerts; custom 404 and 500 pages; error logging enabled |
| Compatibility | Latest two versions of Chrome, Safari, Edge, Firefox; Android and iOS phones |
| Privacy | Child photos and personal data published only with consent; form submissions stored securely and not shared |

## Migration plan, risks and open questions

The plan fixes routing first, then content, then polish, so the site is usable after the first phase. Durations are proposed and assume one developer.

1. **Stabilize (week 1):** diagnose why inner pages fail on Hostinger (rewrite rules, PHP version, missing files or database connection, case-sensitive paths), fix routing and verify every sitemap URL returns 200.
2. **Content cleanup (week 2):** resolve the seven content issues, confirm contact details and statistics with the school, remove the hidden footer and public admin link.
3. **Core features (weeks 3 to 4):** forms with email delivery, notices search and filters, events, blog, galleries, admin access control.
4. **Quality (week 5):** SEO tags, sitemap.xml, performance tuning, accessibility and mobile testing, backups and monitoring.
5. **Launch (week 6):** final URL check, redirects for any changed paths, announce to the school community, monitor for 404s.

**Risks**

| Risk | Impact | Mitigation |
| --- | --- | --- |
| Routing fails again after deploy | Inner pages unreachable | Smoke-test script that requests every sitemap URL after each deploy |
| School does not confirm content in time | Launch delay or wrong figures | Launch with approved facts only; hide unconfirmed sections |
| Dependence on external Eximus portal | Apply and login outages out of our control | Clear fallback contact on the admission page |
| Shared hosting limits | Slow pages under admission-season traffic | Caching, image optimization, upgrade path |
| Public admin route | Unauthorized access | Remove public link, add login, rate limiting and 2FA if supported |

**Open questions**

- [ ] Is 0248318285 a current school number?
- [ ] Which student and staff figures are correct, and as of what date?
- [ ] Are the British Council, Edexcel and Ministry of Education accreditation statements current?
- [ ] Does the school want a Bangla version at launch?
- [ ] Who will own content updates after launch?
