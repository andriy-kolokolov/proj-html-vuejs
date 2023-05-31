import {reactive} from "vue";

export const store = reactive({
    testimonialsFeedbacks: [
        {
            title: 'High level of efficiency and scientific teaching methods',
            body: 'I am free to learn at my own pace, follow my own schedule and choose the subject I want to learn from the syllabus. Great study portal for people like me.',
            userName: 'Mina Hollace',
            userRole: '/Freelancer',
            userImage: 'src/assets/img/artist-testimonial-avatar-01.jpg'
        },
        {
            title: 'Its a choice of quality for people with special needs ',
            body: 'I\'m a very strict person so I require everything to be organized and neat. Then, I\'ll be able to make things right and shine. MaxCoach guys just got me. ',
            userName: 'Florence Themes',
            userRole: '/Multimedia Admin',
            userImage: 'src/assets/img/artist-testimonial-avatar-02.jpg'
        },
        {
            title: 'Professional team of specialists and passionate mentors at reach ',
            body: 'I need to get a certification for English proficiency and MaxCoach is my best choice. Their tutors are smart and professional when dealing with students. \n' +
                'Madley Pondor ',
            userName: 'Madley Pondor',
            userRole: '/IT Specialist',
            userImage: 'src/assets/img/artist-testimonial-avatar-03.jpg'
        },
        {
            title: 'Professional team of specialists and passionate mentors at reach ',
            body: 'I need to get a certification for English proficiency and MaxCoach is my best choice. Their tutors are smart and professional when dealing with students. \n' +
                'Madley Pondor ',
            userName: 'Madley Pondor',
            userRole: '/IT Specialist',
            userImage: 'src/assets/img/artist-testimonial-avatar-04.jpg'
        }
    ],

    // COURSES

    latestCourses: [
        {
            img: 'src/assets/img/artist-course-08-480x480.jpg',
            price: '18.00',
            name: 'The Acrylic Painting Academy',
            lessons: 4,
            students: 50
        },
        {
            img: 'src/assets/img/artist-course-07-480x480.jpg',
            price: '21.00',
            name: 'Drawing and Shading Complete Course',
            lessons: 9,
            students: 50
        },
        {
            img: 'src/assets/img/artist-course-06-480x480.jpg',
            price: '19.00',
            name: 'The Color Theory for Digital Artists',
            lessons: 12,
            students: 50
        },
        {
            img: 'src/assets/img/artist-course-05-480x480.jpg',
            price: '35.00',
            name: 'Ultimate Guide to Digital Sketching for Beginner',
            lessons: 7,
            students: 50
        },
        {
            img: 'src/assets/img/artist-course-04-480x480.jpg',
            price: '19.00',
            name: 'Portrait Drawing The Smart Way',
            lessons: 4,
            students: 50
        },
        {
            img: 'src/assets/img/artist-course-03-480x480.jpg',
            price: '19.00',
            name: 'Master Watercolor Painting from Beginner',
            lessons: 4,
            students: 50
        },
        {
            img: 'src/assets/img/artist-course-02-480x480.jpg',
            price: '25.00',
            name: 'The Art & Science of Drawing',
            lessons: 4,
            students: 50
        },
        {
            img: 'src/assets/img/artist-course-01-480x480.jpg',
            price: '22.00',
            name: 'The Colored Pencil Drawing Course',
            lessons: 6,
            students: 50
        },
    ],

    // UPCOMING EVENTS

    upcomingEvents: [
        {
          img: 'src/assets/img/artist-event-04-250x300.jpg',
          date: 'NOV 22, 2020',
          title: 'Storytelling Workshop',
          location: 'Texas, US'
        },
        {
            img: 'src/assets/img/120012142_177596140500760_8623485824101406058_n.jpg',
            date: 'NOV 23, 2020',
            title: 'Painting Art Contest',
            location: 'New York, US'
        },
        {
            img: 'src/assets/img/120099363_364334431619755_7198812647386067017_n.jpg',
            date: 'OCT 10, 2020',
            title: 'International Art Fair 2020',
            location: 'Hamburg, Germany'
        },
        {
            img: 'src/assets/img/artist-event-01-250x300.jpg',
            date: 'DEC 15, 2020',
            title: 'Street Performance: Call for Artist',
            location: 'Illinois, US'
        },
    ]
});