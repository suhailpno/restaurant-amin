import { useState, useEffect, useRef } from 'react';

interface MenuItem {
  id: number;
  name: string;
  description: string;
  image: string;
}

const menuItems: MenuItem[] = [
  {
    id: 1,
    name: "Chicken Briyani",
    description: "Fragrant basmati rice cooked with marinated chicken and aromatic spices",
    image: "https://as2.ftcdn.net/v2/jpg/04/18/22/51/1000_F_418225186_OCtaNADfMMtBWBwTTOTJYcyjuRMQIqjW.jpg"
  },
  {
    id: 2,
    name: "Mutton Briyani",
    description: "Traditional rice dish with tender mutton pieces and signature spice blend",
    image: "https://as2.ftcdn.net/v2/jpg/09/31/10/69/1000_F_931106955_Sfxxki9r9wgQncILNdKhkdV2pErfeeDN.jpg"
  },
  {
    id: 3,
    name: "Fish Briyani",
    description: "Flavorful rice cooked with marinated fish and traditional herbs",
    image: "https://as1.ftcdn.net/v2/jpg/05/17/97/04/1000_F_517970489_ug6mzjOFZvEChlqqXZeF27XjUtcXQ6HK.jpg"
  },
  {
    id: 4,
    name: "Vegetable Briyani",
    description: "Aromatic rice with seasonal vegetables and special spice blend",
    image: "https://madhurasrecipe.com/wp-content/uploads/2023/03/Veg-Biryani-Featured.jpg"
  },
  {
    id: 5,
    name: "Tandoori Chicken",
    description: "Chicken marinated in yogurt and spices, cooked in a tandoor",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToMozkkZv6pQonP3nn1BlXT2uLTWJxeshxYA&s"
  },
  {
    id: 6,
    name: "Butter Chicken",
    description: "Tender chicken pieces in a rich tomato, butter and cream sauce",
    image: "https://www.licious.in/blog/wp-content/uploads/2020/10/butter-chicken--600x600.jpg"
  },
  {
    id: 7,
    name: "Palak Paneer",
    description: "Cottage cheese cubes in a creamy spinach gravy",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH1KsxtYmHBHm-coLW7g2mTa-HHUhck-I6WQ&s"
  },
  {
    id: 8,
    name: "Garlic Naan",
    description: "Soft flatbread topped with garlic and butter, baked in tandoor",
    image: "https://media.istockphoto.com/id/1143530040/photo/indian-naan-bread-with-garlic-butter-on-wooden-table.jpg?s=612x612&w=0&k=20&c=71SgbJtnfiHUiud1oGxnhiZsx5nuivWwZt8DlIk8hi0="
  },
  {
    id: 9,
    name: "Chicken Tikka",
    description: "Boneless chicken pieces marinated and grilled to perfection",
    image: "https://www.shutterstock.com/image-photo/deliciously-spiced-chicken-tikka-kabab-600nw-2495838045.jpg"
  },
  {
    id: 10,
    name: "Mango Lassi",
    description: "Refreshing yogurt drink with sweet mango pulp",
    image: "https://media.istockphoto.com/id/1365859011/photo/drink-mango-lassi-in-two-glasses-on-rustic-concrete-table-with-fresh-ripe-cut-manfo-from-above.jpg?s=612x612&w=0&k=20&c=uHnr_0raQDe2sgUYHdP5GSa2raaj3ILG4m1cmFHtVJA="
  },
  {
    id: 11,
    name: "Plain Teh",
    description: "Freshly brewed tea served hot",
    image: "https://www.honestfoodtalks.com/wp-content/uploads/2021/04/Teh-tarik-recipe.jpg"
  },
  {
    id: 12,
    name: "Teh Tarik",
    description: "Pulled milk tea, a popular Malaysian drink",
    image: "https://masses.com.my/wp-content/uploads/2019/12/teh-tarik.jpg"
  },
  {
    id: 13,
    name: "Egg Prata",
    description: "Flaky flatbread with egg, served with curry",
    image: "https://c1.staticflickr.com/4/3840/33672774085_ea12bc4bc4_b.jpg"
  },
  {
    id: 14,
    name: "Plain Prata",
    description: "Traditional flaky flatbread served with curry",
    image: "https://i0.wp.com/thestoriedrecipe.com/wp-content/uploads/2023/06/Roti-Paratha-1078.jpg?fit=1200%2C1200&ssl=1"
  },
  {
    id: 15,
    name: "Roti John",
    description: "Singapore-style omelette sandwich with minced meat",
    image: "https://media.womensweekly.com.sg/public/2024/03/where-to-find-roti-john-singapore.jpg"
  },
  {
    id: 16,
    name: "Murtabak Special",
    description: "Stuffed folded prata with meat, eggs and onions",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_nymFQtUk2rcCsBX8GemZS6pO7qG5YcGSnr5MEq1U2009spCTvjjf5iLXvRJ6oLVd57E&usqp=CAU"
  }
];

const MenuSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(element => observer.observe(element));
    
    return () => {
      revealElements.forEach(element => observer.unobserve(element));
    };
  }, []);

  return (
    <section id="menu" className="py-20 px-4 md:px-8 lg:px-0 bg-gradient-to-br from-softYellow/70 to-white" ref={sectionRef}>
      <div className="container mx-auto">
        <h2 className="section-heading text-center mb-12 reveal">
          Menu Highlights
          <span className="absolute -bottom-2 left-0 w-2/3 h-1 bg-accent"></span>
        </h2>
        
        <p className="text-center max-w-2xl mx-auto mb-12 reveal">
          Experience the rich flavors of authentic Indian and Singaporean cuisine with our carefully crafted dishes, 
          made with traditional spices and fresh ingredients.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {menuItems.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-custom overflow-hidden card-hover reveal group">
              <div className="h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <h3 className="font-playfair font-bold text-lg mb-2">{item.name}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a
            href="#order"
            className="btn-primary inline-block"
          >
            Order Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default MenuSection; 