import GradientLayout from '../components/GradientLayout';

const Home = () => {
  return (
    <GradientLayout
      roundImage={true}
      color='blue'
      subtitle='profile'
      title='Test User'
      description='15 public playlists'
      image='https://i.pravatar.cc/300'
    >
      <div>Homepage</div>
    </GradientLayout>
  );
};

export default Home;
