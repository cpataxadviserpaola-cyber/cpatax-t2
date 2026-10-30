import PageHero from '../components/PageHero.jsx';
import TeamSection from '../components/TeamSection.jsx';

export default function Team() {
  return (
    <>
      <PageHero
        page="Meet Our Team"
        parents={[{ to: '/about', label: 'About' }]}
        eyebrow="The people behind your numbers"
        title={<>Meet the people on <em>your side</em></>}
      >
        Get to know the people who will work on your taxes and books before you come to see us.
      </PageHero>
      <TeamSection soft />
    </>
  );
}
