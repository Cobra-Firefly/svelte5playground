import groq from 'groq';

// Events
export const eventQuery = groq`*[_type == "event" && slug.current == $slug]{_id, name, organization, slug, date, venue->, image, details, tickets, video, imageGallery}[0]`;
export const eventsQuery = groq`*[_type == "event" && defined(slug.current) && published == true] | order(date[0].start asc){_id, name, organization, date, venue->, excerpt, description, slug, image}`;
