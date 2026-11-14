import React from 'react';

export default function JsonLd() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'EducationalOrganization',
        '@id': 'https://www.clipjoint.com.au/#education',
        name: 'Clip Joint Education',
        alternateName: 'Clip Joint Academy',
        url: 'https://www.clipjoint.com.au',
        logo: 'https://www.clipjoint.com.au/images/logo-education-white.png',
        image: 'https://www.clipjoint.com.au/images/industry-education.jpg',
        description:
          "Australia's exclusive Sassoon Academy School Connection member. South Australia's premier hairdressing and barbering RTO (RTO Code: 0186, CRICOS: 02103K) offering nationally accredited qualifications and precision cutting masterclasses.",
        telephone: '+61-8-8223-5600',
        email: 'academy@clipjoint.com.au',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Level 1, 86 Pirie Street',
          addressLocality: 'Adelaide',
          addressRegion: 'SA',
          postalCode: '5000',
          addressCountry: 'AU',
        },
        identifier: [
          {
            '@type': 'PropertyValue',
            name: 'RTO Code',
            value: '0186',
          },
          {
            '@type': 'PropertyValue',
            name: 'CRICOS Provider Code',
            value: '02103K',
          },
        ],
        sameAs: [
          'https://www.facebook.com/ClipJointEducation/',
          'https://www.instagram.com/clipjointeducation/',
          'https://www.myskills.gov.au/RegisteredTrainers/Details?rtocode=0186',
        ],
      },
      {
        '@type': 'HairSalon',
        '@id': 'https://www.clipjoint.com.au/#salon-melbourne-st',
        name: 'Clip Joint Salons - Melbourne Street',
        url: 'https://www.clipjoint.com.au/salons',
        telephone: '+61-8-8267-4044',
        priceRange: '$$$',
        image: 'https://www.clipjoint.com.au/images/melbourne-st.jpg',
        address: {
          '@type': 'PostalAddress',
          streetAddress: '167 Melbourne Street',
          addressLocality: 'North Adelaide',
          addressRegion: 'SA',
          postalCode: '5006',
          addressCountry: 'AU',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: -34.9084,
          longitude: 138.6087,
        },
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Tuesday', 'Wednesday', 'Friday'],
            opens: '09:00',
            closes: '17:30',
          },
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Thursday'],
            opens: '09:00',
            closes: '20:00',
          },
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Saturday'],
            opens: '08:30',
            closes: '16:00',
          },
        ],
      },
      {
        '@type': 'HairSalon',
        '@id': 'https://www.clipjoint.com.au/#salon-burnside',
        name: 'Clip Joint Salons - Burnside Village',
        url: 'https://www.clipjoint.com.au/salons',
        telephone: '+61-8-8379-9421',
        priceRange: '$$$',
        image: 'https://www.clipjoint.com.au/images/hero-salon.jpg',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Shop 53, Burnside Village, 447 Portrush Road',
          addressLocality: 'Glenside',
          addressRegion: 'SA',
          postalCode: '5065',
          addressCountry: 'AU',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: -34.9431,
          longitude: 138.6472,
        },
      },
      {
        '@type': 'Course',
        name: 'SHB30416 Certificate III in Hairdressing',
        description:
          'Comprehensive nationally recognised qualification endorsed by industry. Combines Sassoon precision methodology with commercial salon training.',
        provider: {
          '@type': 'EducationalOrganization',
          name: 'Clip Joint Education',
          sameAs: 'https://www.clipjoint.com.au',
        },
        educationalCredentialAwarded: 'Certificate III in Hairdressing (SHB30416)',
        occupationalCategory: 'Hairdresser',
        hasCourseInstance: {
          '@type': 'CourseInstance',
          courseMode: 'Blended',
          location: 'Adelaide CBD Campus, 86 Pirie St, Adelaide SA',
        },
      },
      {
        '@type': 'Course',
        name: 'SHB20216 Certificate II in Salon Assistant',
        description:
          'Foundation hairdressing course ideal for high school students, VET in Schools, or entry-level salon careers in South Australia.',
        provider: {
          '@type': 'EducationalOrganization',
          name: 'Clip Joint Education',
        },
      },
      {
        '@type': 'WebSite',
        '@id': 'https://www.clipjoint.com.au/#website',
        url: 'https://www.clipjoint.com.au',
        name: 'Clip Joint Education & Salons Adelaide',
        description:
          'Adelaide premier hairdressing academy (RTO 0186, CRICOS 02103K) and luxury salons celebrating 50 years of style.',
        publisher: {
          '@id': 'https://www.clipjoint.com.au/#education',
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}

