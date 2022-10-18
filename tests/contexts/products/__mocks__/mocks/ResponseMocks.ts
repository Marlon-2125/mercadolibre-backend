export const input = {
  idSuccessFlow: 'MLA1118725350',
  idNotFoundProductFlow: 'MLAERRORP'
};

export const findByTermSuccessResponse = {
  'data': {
    'results': [
      {
        'id': 'MLA1118725350',
        'title': 'Nonisec Apósitos Para Incontinencia Fuerte X 20 Unidades',
        'price': 999,
        'currency_id': 'ARS',
        'sold_quantity': 5000,
        'condition': 'new',
        'thumbnail_id': '689033-MLA45168260143_032021',
        'address': {
          'state_name': 'Buenos Aires',
        },
        'shipping': {
          'free_shipping': false,
        },
        'seller_address': {
          'state': {
            'name': 'Buenos Aires'
          },
        },
        'original_price': 1229,
        'category_id': 'MLA455050',
      },
      {
        'id': 'MLA933946673',
        'title': 'Nonisec Apósito Refuerza Pañal Maxi Descartable X 20u',
        'price': 999,
        'currency_id': 'ARS',
        'sold_quantity': 5000,
        'condition': 'new',
        'thumbnail_id': '782551-MLA47073869857_082021',
        'address': {
          'state_name': 'Buenos Aires',
        },
        'shipping': {
          'free_shipping': false,
        },
        'seller_address': {
          'state': {
            'name': 'Buenos Aires'
          },
        },
        'original_price': 1229,
        'category_id': 'MLA455050',
      }
    ],
    'filters': [
      {
        'id': 'category',
        'name': 'Categorías',
        'values': [
          {
            'path_from_root': [
              {
                'id': 'MLA1743',
                'name': 'Autos, Motos y Otros'
              },
              {
                'id': 'MLA1763',
                'name': 'Motos'
              }
            ]
          }
        ]
      }
    ]
  }
};

export const findByIdSuccessResponse = {
  'data': {
    'id': 'MLA1118725350',
    'title': 'Zanella Styler 150 Exclusive Z3 - Ahora 12 - Créditos Dni!',
    'price': 501990,
    'picture': 'https://http2.mlstatic.com/D_NQ_NP_767602-718849-MLA50364287067_062022-V.webp',
    'condition': 'new',
    'shipping': {
      'free_shipping': true
    },
    'address': {
      'state_name': 'Buenos Aires'
    },
    'seller_address': {
      'state': {
        'name': 'Buenos Aires'
      },
    },
    'category_id': '1MS,',
    'thumbnail_id': '1MS'
  }
};

export const findByIdErrorResponse = {
  'message': 'Item with id MLAERROR not found',
  'error': 'not_found',
  'status': 404,
  'cause': []
};

export const findDetailsByIdSuccessResponse = {
  'data': {
    'plain_text': 'MLA1118725350'
  }
};

export const findCategorySuccessResponse = {
  'data': {
    'path_from_root': [
      {
        'id': 'MLA1132',
        'name': 'Juegos y Juguetes'
      },
      {
        'id': 'MLA352344',
        'name': 'Armas y Lanzadores de Juguete'
      },
      {
        'id': 'MLA433029',
        'name': 'Pistolas y Escopetas'
      }
    ]
  }
};
