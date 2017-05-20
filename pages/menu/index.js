import React from 'react'
import Helmet from 'react-helmet'

const MenuItem = ({ data }) => {
  return (
    <div key={data.title} className="MenuItem">
      <img alt={data.description} src={`/img${data.image}`} />
    </div>
  );
};

MenuItem.propTypes = {
  data: React.PropTypes.shape({
    title: React.PropTypes.string,
    description: React.PropTypes.string,
    image: React.PropTypes.string,
  }).isRequired,
}

const MenuIndex = ({ route }) => {
  const menuPages = route.pages.filter(page => (page.file.ext === 'md' && page.path.indexOf('/menu/') === 0));
  return (
    <div>
      <Helmet
        title="Menu"
        meta={[
          { name: 'description', content: 'Our delicious menu including the Sophie T Special' },
          { name: 'keywords', content: 'menu, hot drinks, sandwiches, cream tea, Sophie T Special' },
        ]}
      />
      <p> Our delicious menu including the Sophie T Special </p>
      {menuPages.map(page => MenuItem(page))}
    </div>
  )
}

MenuIndex.propTypes = {
  route: React.PropTypes.shape({
    pages: React.PropTypes.array.isRequired,
  }).isRequired,
}

export default MenuIndex
