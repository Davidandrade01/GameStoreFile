<p align="center" width="100%">
    <img width="100%" src="./public/image/logoBackGround.png"> 
</p>

#### Menu
[Nota](#nota)  |

[Stack](#stack)  |

[Seções desenvolvidas](#seções-desenvolvidas) |

[Interface](#interface) |

[Jornada do usuário](#jornada-do-usuário) | 

[Api´s](#apis) |

[Heurísticas de Nielsen aplicadas (UX)](#heurísticas-de-nielsen-aplicadas-ux) |

[Links](#links) |

[Dependências](#dependencias) |


# Nota
<p>
    O **Game Store** é um **e-commerce** em desenvolvimento, com códigos robustos que são totalmente adequados ao mercado como um produto comercial. Nesta plataforma, os usuários têm a capacidade de comprar jogos listados em sua plataforma de jogos ou facilmente encontrá-los usando a barra de pesquisa.</P>
    
<p>Durante toda a experiência de navegação, os usuários podem acessar seu perfil e os dados de compras, que são armazenados localmente. Esses dados são encapsulados por meio de **Auth Context** e posteriormente reconhecidos e armazenados em um banco de dados (Strapi). Na plataforma **Strapi**, foram construídas coleções de dados tanto para produtos quanto para regras autenticadas e públicas relacionadas à configuração de perfis de conteúdo individual.</p>

<p> Para facilitar o gerenciamento da API criada na aplicação web, utilizou-se o **Insomnia**, que simplifica os testes de rotas e melhora o desempenho com as **APIs REST**  configuradas com métodos **GET, DELETE e POST** para comunicação entre cliente e servidor.</P>

<P> O layout da aplicação é simples e intuitivo, priorizando a funcionalidade e eficácia, seguindo o princípio de tornar as coisas visíveis, conforme afirmado por **Donald Norman**. </P>

<P> A aplicação web proporciona uma experiência intuitiva aos usuários, incluindo registro/login, alterações de perfil, busca de itens (jogos), compra, gerenciamento do carrinho de compras (**CRUD**), seleção da direção de entrega do produto e integração com a API de pagamento. Tudo isso é projetado com base em boas práticas de **UX**, seguindo as convenções mencionadas por **Steve Krug** e mantendo hierarquias visuais claras. </P>

<P> O código da aplicação está organizado em componentes e hooks, com criação de rotas de API renderizadas usando **React** e **Next Js** como framework, e os estilos são divididos e gerenciados com **Sass**. Além disso, a integração da API do **Paypal** permite uma variedade de opções de pagamento e o processamento de pedidos. </P>




<p align="center" width="100%">
    <img width="50%" src=" ./public/images/Apresenta%C3%A7%C3%A3o.gif.gif"> 
</p>

## Stack

* JavaScript 

Biblioteca | Framework | Recursos
-----------|---------- |---------
**React**      |**Next.js**    |  Hooks, Context, Components, Props


* Html

* Css
  * **Sass**
  * **Tailwind**

* Base de Dados para autenticação
  * **FireBase** 

* Integração com Api de pagamento
  * **Pay-pal**


## Seções desenvolvidas

### Interface
- [x] Barra de pesquisa com acesso à api
- [x] Login/Logout
- [ ] Favoritos (por desenvolver)
- [x] Bag/carrinho
- [x] pop-up (modal) do carrinho
- [x] Adição e remoção de itens
- [ ] Histórico de compras(por desenvolver)
- [x] Menu DropDown por categorias de produtos
- [x] Carrossel com cards dos produtos
- [x] Modal do carrossel com detalhes dos produtos(Preço, marca, detalhes)
- [x] Newsletter funcional

### Jornada do usuário 

- [x] Login ou registro
- [x] Feedback de erro, ou sucesso
>  Catch
```js
catch (error) {
            console.log(error.message)
            console.log(typeof error.message)

            let systemErrorMessage
            if(error.message.includes("password")){
                systemErrorMessage=("Password needs at least 6 characters")
            }}
  ```
- [x] Busca do item pelo card , ou na barra de pesquisa

>Loading Componente ( Uso de Spinner para indicar busca ao usuário)

```js
{loading &&
      <Loading/>
      }
```      

- [x] Adição de itens no carrinho/remoção

>Quantidade do produto

<p align="center" width="100%">
    <img width="50%" src="./public/images//Adi%C3%A7%C3%A3o%20e%20remo%C3%A7%C3%A3o.gif"> 
</p>

- [x] Atualização e feedback visual(fade-in-out) do carrinho(bag)
- [x] Checkout(preenchimento de endereço)
- [x] Pagamento (Conexão com o **pay-pal**)
- [ ] Conclusão do pedido( página por desenvolver)


## Api´s

Api| url
---|---
FakestoreApi | https://fakestoreapi.com/
DummyJson | https://dummyjson.com/docs/products
Duminio   |https://api.duminio.com/ptcp

## Heurísticas de Nielsen aplicadas (UX)

* Estética Minimalista
* Correspondência entre o sistema e o mundo real
* Visibilidade do Status do Sistema
* Consistência e padronização.

## Links

links pessoais  | url
-------------   |------------------
Linkedin        |https://linkedin.com/in/davidandradefrontendreact
Vercel          | https://buy-7f362jkxd-davidandrade01.vercel.app/

## Dependências

* @headlessui/react": "^1.7.9",
* @paypal/react-paypal-js": "^7.8.2",
* firebase: "^9.16.0"
* "next": "^13.1.2",
* "react": "18.2.0",
* "react-dom": "18.2.0",
* "react-firebase-hooks": "^5.1.1",
* "react-hook-form": "^7.43.0",
* "react-icons": "^4.7.1",
* "react-multi-carousel": "^2.8.2",
* "react-responsive-carousel": "^3.2.23",
* "react-router-dom": "^6.8.0",
* "react-spinners": "^0.13.8",
* "react-transition-group": "^4.4.5",
* "uuid": "^9.0.0"
