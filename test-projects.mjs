import { projects, getFeaturedProjects } from './src/data/projects.ts';

console.log('Total projects:', projects.length);
console.log('Featured projects:', getFeaturedProjects().length);
console.log('\nFeatured projects:');
getFeaturedProjects().forEach(p => {
  console.log(`  - ${p.id}: ${p.title}`);
});

const bookingProject = projects.find(p => p.id === 'booking-system-fullstack');
if (bookingProject) {
  console.log('\n✓ Booking System project found:');
  console.log(`  Title: ${bookingProject.title}`);
  console.log(`  Featured: ${bookingProject.featured}`);
  console.log(`  Categories: ${bookingProject.categories.join(', ')}`);
  console.log(`  Technologies: ${bookingProject.technologies.join(', ')}`);
  console.log(`  GitHub: ${bookingProject.githubUrl}`);
} else {
  console.log('\n✗ Booking System project NOT found');
}
