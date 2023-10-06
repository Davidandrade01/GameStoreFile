<p align="center" width="100%">
    <img width="33%" src="./public/images/logobuyit.png"> 
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
 O **Buyit** é um estudo de ecommerce que envolve suas principais etapas de login ao checkout. A ideia de criação do projeto com a intenção de compor meu portifólio de estudos dada a minha recente formação na área de front-end. 

  Posso dizer com toda a certeza que foi o projeto em que estive mais mergulhado e que deu mais trabalho de manutenção em suas **PROPS** e manejo dos resultados das **Api´s** aplicadas. 
  Para implementa-lo inicialmente foram aplicada algum conceitos de experiência do usuário que foram traduzidas em código integrando uma jornada mais clara. 

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
