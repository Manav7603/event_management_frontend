const events= [ 
    {
        id: 1,
        title: "Tech Fest 2025",
        status: "upcoming",
        description: "A grand celebration of technology and innovation.",
        date: "March 10, 2025",
        location: "Bangalore",
        numberOfParticipants: 5000,
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=286"
    },
    {
        id: 2,
        title: "Music Fiesta",
        status: "ongoing",
        description: "A night of live music and entertainment.",
        date: "February 20, 2025",
        location: "Mumbai",
        numberOfParticipants: 1500,
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=286"
    },
    {
        id: 3,
        title: "Art & Culture Expo",
        status: "upcoming",
        description: "Celebrating art and culture from around the world.",
        date: "April 15, 2025",
        location: "Delhi",
        numberOfParticipants: 2000,
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=286"
    },
    {
        id: 4,
        title: "Startup Summit",
        status: "completed",
        description: "Networking and idea-sharing for budding entrepreneurs.",
        date: "December 15, 2024",
        location: "Hyderabad",
        numberOfParticipants: 1200,
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=286"
    },
    {
        id: 5,
        title: "Fitness Bootcamp",
        status: "upcoming",
        description: "Join us for a week of fitness and well-being activities.",
        date: "March 5, 2025",
        location: "Pune",
        numberOfParticipants: 800,
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=286"
    },
    {
        id: 6,
        title: "Coding Hackathon",
        status: "ongoing",
        description: "Compete with the best developers to solve real-world challenges.",
        date: "February 12, 2025",
        location: "Chennai",
        numberOfParticipants: 300,
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=286"
    },
    {
        id: 7,
        title: "Food Carnival 2025",
        status: "upcoming",
        description: "A paradise for food lovers with cuisines from all over the world.",
        date: "March 25, 2025",
        location: "Kolkata",
        numberOfParticipants: 2500,
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=286"
    },
    {
        id: 8,
        title: "Book Readers Meetup",
        status: "completed",
        description: "An evening of book discussions and author meetups.",
        date: "January 5, 2025",
        location: "Jaipur",
        numberOfParticipants: 600,
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=286"
    },
    {
        id: 9,
        title: "Photography Workshop",
        status: "upcoming",
        description: "Learn the art of capturing perfect shots from professionals.",
        date: "April 5, 2025",
        location: "Goa",
        numberOfParticipants: 300,
        image: "https://images.unsplash.com/photo-1504198458649-d4e9c97e6f0b?auto=format&fit=crop&w=286"
    },
    {
        id: 10,
        title: "Tech Fest 2025",
        status: "upcoming",
        description: "A grand celebration of technology and innovation.",
        date: "March 10, 2025",
        location: "Bangalore",
        numberOfParticipants: 5000,
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=286"
    },
    {
        id: 11,
        title: "Music Fiesta",
        status: "ongoing",
        description: "A night of live music and entertainment.",
        date: "February 20, 2025",
        location: "Mumbai",
        numberOfParticipants: 1500,
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=286"
    },
    {
        id: 12,
        title: "Art & Culture Expo",
        status: "upcoming",
        description: "Celebrating art and culture from around the world.",
        date: "April 15, 2025",
        location: "Delhi",
        numberOfParticipants: 2000,
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=286"
    },
    {
        id: 13,
        title: "Startup Summit",
        status: "completed",
        description: "Networking and idea-sharing for budding entrepreneurs.",
        date: "December 15, 2024",
        location: "Hyderabad",
        numberOfParticipants: 1200,
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=286"
    },
    {
        id: 14,
        title: "Fitness Bootcamp",
        status: "upcoming",
        description: "Join us for a week of fitness and well-being activities.",
        date: "March 5, 2025",
        location: "Pune",
        numberOfParticipants: 800,
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=286"
    },
    {
        id: 15,
        title: "Coding Hackathon",
        status: "ongoing",
        description: "Compete with the best developers to solve real-world challenges.",
        date: "February 12, 2025",
        location: "Chennai",
        numberOfParticipants: 300,
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=286"
    },
    {
        id: 16,
        title: "Food Carnival 2025",
        status: "upcoming",
        description: "A paradise for food lovers with cuisines from all over the world.",
        date: "March 25, 2025",
        location: "Kolkata",
        numberOfParticipants: 2500,
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=286"
    },
    {
        id: 17,
        title: "Book Readers Meetup",
        status: "completed",
        description: "An evening of book discussions and author meetups.",
        date: "January 5, 2025",
        location: "Jaipur",
        numberOfParticipants: 600,
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=286"
    },
    {
        id: 18,
        title: "Photography Workshop",
        status: "upcoming",
        description: "Learn the art of capturing perfect shots from professionals.",
        date: "April 5, 2025",
        location: "Goa",
        numberOfParticipants: 300,
        image: "https://images.unsplash.com/photo-1504198458649-d4e9c97e6f0b?auto=format&fit=crop&w=286"
    },
    {
        id: 19,
        title: "Tech Fest 2025",
        status: "upcoming",
        description: "A grand celebration of technology and innovation.",
        date: "March 10, 2025",
        location: "Bangalore",
        numberOfParticipants: 5000,
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=286"
    },
    {
        id: 20,
        title: "Music Fiesta",
        status: "ongoing",
        description: "A night of live music and entertainment.",
        date: "February 20, 2025",
        location: "Mumbai",
        numberOfParticipants: 1500,
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=286"
    },
    {
        id: 21,
        title: "Art & Culture Expo",
        status: "upcoming",
        description: "Celebrating art and culture from around the world.",
        date: "April 15, 2025",
        location: "Delhi",
        numberOfParticipants: 2000,
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=286"
    },
    {
        id: 22,
        title: "Startup Summit",
        status: "completed",
        description: "Networking and idea-sharing for budding entrepreneurs.",
        date: "December 15, 2024",
        location: "Hyderabad",
        numberOfParticipants: 1200,
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=286"
    },
    {
        id: 23,
        title: "Fitness Bootcamp",
        status: "upcoming",
        description: "Join us for a week of fitness and well-being activities.",
        date: "March 5, 2025",
        location: "Pune",
        numberOfParticipants: 800,
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=286"
    },
    {
        id: 24,
        title: "Coding Hackathon",
        status: "ongoing",
        description: "Compete with the best developers to solve real-world challenges.",
        date: "February 12, 2025",
        location: "Chennai",
        numberOfParticipants: 300,
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=286"
    }
];

export default events;