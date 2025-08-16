import React from 'react';
import PageHeader from '@components/PageHeader';
import SectionHeader from '@components/SectionHeader';
import { FaCalendarAlt, FaMusic, FaGlassCheers, FaUtensils, FaTheaterMasks, FaMicrophone } from 'react-icons/fa';

const Events = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: "Jazz Under the Stars",
      date: "15 October 2023",
      time: "7:00 PM - 11:00 PM",
      description: "An enchanting evening of smooth jazz performances in our moonlit garden terrace featuring international artists",
      image: "https://images.unsplash.com/photo-1501612780327-45045538702b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      category: "Music"
    },
    {
      id: 2,
      title: "Wine Tasting Gala",
      date: "28 October 2023",
      time: "6:30 PM - 10:00 PM",
      description: "Sample exquisite wines from renowned vineyards paired with gourmet delicacies by our executive chef",
      image: "https://images.unsplash.com/photo-1551751299-1b51cab2694c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      category: "Food & Wine"
    },
    {
      id: 3,
      title: "Diwali Celebration",
      date: "12 November 2023",
      time: "5:00 PM - Midnight",
      description: "Traditional festivities with cultural performances, fireworks, and a grand feast to celebrate the festival of lights",
      image: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80",
      category: "Cultural"
    }
  ];

  const eventCategories = [
    {
      icon: <FaMusic className="text-4xl text-viyat-gold" />,
      name: "Music & Entertainment",
      count: "12+ events yearly",
      description: "Concerts, DJ nights, and live performances"
    },
    {
      icon: <FaGlassCheers className="text-4xl text-viyat-gold" />,
      name: "Food & Wine",
      count: "Monthly tastings",
      description: "Gourmet experiences and beverage pairings"
    },
    {
      icon: <FaTheaterMasks className="text-4xl text-viyat-gold" />,
      name: "Cultural Events",
      count: "All major festivals",
      description: "Traditional celebrations and performances"
    },
    {
      icon: <FaMicrophone className="text-4xl text-viyat-gold" />,
      name: "Speaker Series",
      count: "Quarterly programs",
      description: "Thought leaders and industry experts"
    }
  ];

  return (
    <div>
      <PageHeader
        title="Club Events"
        subtitle="Curated experiences for our members"
        backgroundImage="https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
        overlay
      />

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <SectionHeader
              title="Upcoming Events"
              subtitle="Join us for these exclusive experiences"
            />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-6">
              Our calendar features a vibrant mix of social, cultural, and entertainment events throughout the year.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-20">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all">
                <div className="h-64 overflow-hidden relative">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-4 right-4 bg-viyat-gold text-white px-3 py-1 text-sm font-bold rounded-full">
                    {event.category}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-viyat-navy mb-2">{event.title}</h3>
                  <div className="flex items-center text-gray-600 mb-4">
                    <FaCalendarAlt className="mr-2 text-viyat-gold" />
                    <span>{event.date} • {event.time}</span>
                  </div>
                  <p className="text-gray-600 mb-6">{event.description}</p>
                  <div className="flex gap-4">
                    <button className="flex-1 py-2 bg-viyat-gold hover:bg-viyat-navy text-white rounded-md transition-colors">
                      RSVP
                    </button>
                    <button className="flex-1 py-2 border border-viyat-navy text-viyat-navy hover:bg-gray-50 rounded-md transition-colors">
                      Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mb-20">
            <SectionHeader
              title="Event Categories"
              subtitle="Something for every interest"
              className="text-center"
            />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-6 text-center">
              Discover the diverse range of events we host throughout the year.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
              {eventCategories.map((category, index) => (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all text-center h-full">
                  <div className="mb-6">{category.icon}</div>
                  <h3 className="text-xl font-bold text-viyat-navy mb-2">{category.name}</h3>
                  <p className="text-viyat-gold font-medium mb-3">{category.count}</p>
                  <p className="text-gray-600">{category.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-viyat-navy text-white p-12 rounded-2xl">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-3xl font-bold mb-6">Host Your Private Event</h3>
              <p className="text-xl mb-8 opacity-90">
                Our elegant venues and expert event planners can bring your vision to life, whether it's a milestone celebration, corporate gathering, or social soirée.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button className="px-8 py-3 bg-viyat-gold hover:bg-white text-viyat-navy rounded-md transition-colors font-medium">
                  Enquire About Venues
                </button>
                <button className="px-8 py-3 border border-white hover:bg-white/10 rounded-md transition-colors font-medium">
                  View Floor Plans
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;