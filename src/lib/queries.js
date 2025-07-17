export const testimonialQuery = `*[_type == "testimonial"] | order(_createdAt asc) {
  _id,
  name,
  role,
  company,
  content,
  avatarType,
  avatarImage,
  avatarUrl,
  "avatar": coalesce(avatarImage.asset->url, avatarUrl)
}`;
