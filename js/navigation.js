// Seleciona os elementos do DOM
        const burger = document.querySelector('.burger');
        const navLinks = document.querySelector('.nav-links');

        // Adiciona o 'escutador' de evento de clique ao hambúrguer
        burger.addEventListener('click', () => {
            const isExpanded = burger.getAttribute('aria-expanded') === 'true';
            burger.setAttribute('aria-expanded', String(!isExpanded));
            burger.setAttribute('aria-label', isExpanded ? 'Abrir menu' : 'Fechar menu');
            navLinks.classList.toggle('active', !isExpanded);
            burger.classList.toggle('toggle', !isExpanded);
        });

        navLinks.querySelectorAll('a').forEach((link) => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                burger.classList.remove('toggle');
                burger.setAttribute('aria-expanded', 'false');
                burger.setAttribute('aria-label', 'Abrir menu');
            });
        });
