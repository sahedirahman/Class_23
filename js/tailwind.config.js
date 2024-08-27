tailwind.config = {
    theme: {
      extend: {
        // Color Part Start
        colors: {
            headerColor: '#160C6D',
            btnColor: '#1BBF00', 
            borderColor: '#4F585F',
            happyColor: '#141135',
            afterColor:'rgba(79, 88, 95, 0.7)',
        },
        // Color Part End
        // Container Part Start
        maxWidth: {
            'headerContainer': '1170px',
            'bannerContainer': '962px',
            'counterContainer': '1209px',

          },
        // Container Part End
        // Font Family Start
        fontFamily: {
            'open': ['Open Sans'],
            'papri': ['Paprika'],
          },
        // Font Family End
        // Back Ground Image Start
        backgroundImage: {
          bannerImage: "url('./images/bg.jpg')",
          cardImage: "url('./images/card.png')",
          
        },
        // Back Ground Image End
        
        }
        
      }
    }
  