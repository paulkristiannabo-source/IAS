# Institute of Arts and Sciences - TCGC Website

A modern, responsive multi-page website for the Institute of Arts and Sciences at TCGC, built with React, React Router, and Tailwind CSS.

## Features

- **Multi-page Navigation**: Seamless navigation between 7 main pages using React Router
- **Responsive Design**: Mobile-first approach with Tailwind CSS for all screen sizes
- **Royal Purple Theme**: Modern color scheme with professional aesthetics
- **Sticky Header**: Navigation stays accessible while scrolling
- **Comprehensive Content**:
  - Home page with hero section
  - About page with vision and values
  - Academic Programs with curriculum tables
  - Faculty directory
  - Organizational structure
  - Student life and organizations
  - Contact form and information

## Pages

1. **Home** - Hero section with institution overview and key features
2. **About** - Vision, mission, and core values
3. **Academic Programs** - Detailed programs with curriculum (BA English, BA Communication, BA Political Science)
4. **Faculty** - Faculty directory with expertise areas
5. **Organizational Structure** - Leadership team and department information
6. **Students** - Student organizations (YLS, COMMunity, PSC) and resources
7. **Contact** - Contact form, contact details, and location

## Technology Stack

- **Frontend Framework**: React 18.2.0
- **Routing**: React Router 6.20.0
- **Styling**: Tailwind CSS 3.4.0
- **Build Tool**: React Scripts 5.0.1
- **PostCSS**: For CSS preprocessing

## Installation

1. Navigate to the project directory:
```bash
cd "path/to/WEBSITE"
```

2. Install dependencies:
```bash
npm install
```

## Running the Project

### Development Server
```bash
npm start
```
Opens [http://localhost:3000](http://localhost:3000) in the browser.

### Production Build
```bash
npm run build
```
Creates an optimized production build in the `build` folder.

## Project Structure

```
WEBSITE/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Header.js
│   │   └── Footer.js
│   ├── pages/
│   │   ├── Home.js
│   │   ├── About.js
│   │   ├── AcademicPrograms.js
│   │   ├── Faculty.js
│   │   ├── OrgStructure.js
│   │   ├── Students.js
│   │   └── Contact.js
│   ├── App.js
│   ├── index.js
│   └── index.css
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── .gitignore
```

## Contact Information

- **Phone**: 0936 233 4732
- **Email**: iastcgc@gmail.com
- **Facebook**: https://facebook.com/iastcgc
- **Instagram**: https://instagram.com/iastcgc

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Customization

### Colors
Edit `tailwind.config.js` to customize the Royal Purple theme:
```javascript
colors: {
  "royal-purple": "#6B46C1",
  "royal-purple-dark": "#4C1D95",
  "royal-purple-light": "#8B5CF6",
}
```

### Content
All content is in the respective page files in `src/pages/`. Update text, images, and data as needed.

### Images
The site uses Unsplash placeholders. Replace URLs in component files with your own images:
```javascript
<img src="https://images.unsplash.com/..." alt="description" />
```

## Performance Features

- Smooth scrolling
- Hover transitions and effects
- Lazy loading ready
- SEO-friendly structure
- Mobile-optimized images

## Future Enhancements

- Blog section for news and updates
- Event calendar
- Student gallery
- Alumni network
- Online admission portal
- Appointment booking system
- Newsletter subscription

## License

This project is for the Institute of Arts and Sciences, TCGC.

## Support

For issues or questions, contact: iastcgc@gmail.com or call 0936 233 4732
