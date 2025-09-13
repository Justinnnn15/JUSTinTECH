// parts.js - small helper for parts page
document.addEventListener('DOMContentLoaded', function () {
    // Ensure HOME link points to indexx.html (page 1)
    const home = document.querySelector('.parts-navbar .home-link');
    if (home) home.setAttribute('href', 'indexx.html');

    // Small active-link behavior
    const links = document.querySelectorAll('.parts-navbar a');
    const content = document.getElementById('component-content');

    links.forEach(link => {
        link.addEventListener('click', function (e) {
            const comp = this.getAttribute('data-component');

            // If the link points to HOME or external, allow normal navigation
            if (!comp) return;

            e.preventDefault();

            // Toggle active class for underline/visual state
            links.forEach(l => l.classList.remove('active'));
            this.classList.add('active');

            // Render structured content for the selected component
            if (content) {
                content.innerHTML = '';

                if (comp === 'cpu') {
                    const article = document.createElement('article');
                    article.className = 'cpu-article';

                    const intro = document.createElement('div');
                    intro.className = 'cpu-intro';
                    intro.innerHTML = `
                        <h2>The Central Processing Unit (CPU)</h2>
                        <p>The Central Processing Unit (CPU) is often called the "brain" of your computer. It's responsible for executing instructions, performing calculations, and managing the flow of information. Think of it like the conductor of an orchestra, making sure all the different parts of your computer work together smoothly.</p>
                        <h3>How it Works (Simply):</h3>
                        <ul>
                            <li><strong>Cores:</strong> Modern CPUs have multiple "cores," which are like individual mini-processors. More cores generally mean the CPU can handle more tasks simultaneously.</li>
                            <li><strong>Clock Speed (GHz):</strong> This measures how many instructions a core can process per second. Higher GHz means faster processing.</li>
                            <li><strong>Threads:</strong> These are virtual components that allow a single core to handle multiple tasks more efficiently.</li>
                        </ul>
                        <p>The CPU's performance directly impacts how fast your computer can open programs, browse the web, play games, and perform other tasks.</p>
                    `;

                    const brands = document.createElement('div');
                    brands.className = 'cpu-brands';

                    brands.innerHTML = `
                        <div class="brand-card">
                            <h4>Intel</h4>
                            <div class="brand-body">
                                <div class="brand-text">
                                    <p><strong>Pros of Intel CPUs:</strong></p>
                                    <ul>
                                        <li>Strong Single-Core Performance: Intel CPUs often excel in tasks that rely on one powerful core, like gaming.</li>
                                        <li>Integrated Graphics: Many Intel CPUs come with built-in graphics processing useful for everyday use and light gaming.</li>
                                        <li>Good for Productivity: Efficient for general office work and tasks that benefit from quick single-core operations.</li>
                                    </ul>
                                    <p><strong>Cons of Intel CPUs:</strong></p>
                                    <ul>
                                        <li>Higher Price: Intel CPUs can sometimes be more expensive, especially high-end models.</li>
                                        <li>Fewer Cores/Threads at Lower Price Points: You might get fewer cores for the money compared to AMD.</li>
                                        <li>Power Consumption and Heat: Some high-performance Intel chips can consume more power.</li>
                                    </ul>
                                </div>
                                <img class="brand-image" src="CPU_IMAGE/Intel_CPU.jpg" alt="Intel CPU">
                            </div>
                        </div>
                        <div class="brand-card">
                            <h4>AMD</h4>
                            <div class="brand-body">
                                <div class="brand-text">
                                    <p><strong>Pros of AMD CPUs:</strong></p>
                                    <ul>
                                        <li>Excellent Multi-Core Performance: Ideal for content creation and heavy multitasking.</li>
                                        <li>Better Value: Often offers more cores and threads for your money.</li>
                                        <li>Integrated Graphics (Ryzen G-series): APUs provide strong integrated graphics for gaming without a dedicated GPU.</li>
                                    </ul>
                                    <p><strong>Cons of AMD CPUs:</strong></p>
                                    <ul>
                                        <li>Lower Single-Core Speed (Historically): Intel historically held an edge in single-core speed.</li>
                                        <li>Higher Power Consumption (Some Models): High-core count chips can draw more power under load.</li>
                                        <li>Motherboard Compatibility: Different sockets (AM4 vs AM5) may require newer motherboards for upgrades.</li>
                                    </ul>
                                </div>
                                <img class="brand-image" src="CPU_IMAGE/AMD_CPU.webp" alt="AMD CPU">
                            </div>
                        </div>
                    `;

                    const conclusion = document.createElement('div');
                    conclusion.className = 'cpu-conclusion';
                    conclusion.innerHTML = `<p>Both Intel and AMD offer excellent CPUs, and the best choice depends on your specific needs, budget, and how you plan to use your computer.</p>`;

                    // Add 2025 CPU lists for Intel and AMD
                    const lists = document.createElement('div');
                    lists.className = 'cpu-lists';
                    lists.innerHTML = `
                        <div class="vendor-list">
                            <h5>Intel CPUs</h5>
                            <div class="list-section"><strong>Old (budget-friendly, entry-level)</strong>
                                <ul>
                                    <li>Intel Core i5-9600K – 6 cores, solid for older games and basic use.</li>
                                    <li>Intel Core i7-8700K – 6 cores, was a top choice for gaming in its time.</li>
                                </ul>
                            </div>
                            <div class="list-section"><strong>Mid (modern, balanced)</strong>
                                <ul>
                                    <li>Intel Core i5-12600K – 10 cores, great gaming + multitasking mix.</li>
                                    <li>Intel Core i7-13700K – 16 cores, strong for both gaming and editing.</li>
                                </ul>
                            </div>
                            <div class="list-section"><strong>Powerful (high-end, latest)</strong>
                                <ul>
                                    <li>Intel Core i9-13900K – 24 cores, excellent for gaming + heavy workloads.</li>
                                    <li>Intel Core i9-14900K – Latest flagship, extreme performance for pros.</li>
                                </ul>
                            </div>
                        </div>
                        <div class="vendor-list">
                            <h5>AMD (Ryzen) CPUs</h5>
                            <div class="list-section"><strong>Old (budget-friendly, entry-level)</strong>
                                <ul>
                                    <li>Ryzen 5 2600 – 6 cores, popular for budget gaming PCs.</li>
                                    <li>Ryzen 7 2700X – 8 cores, good for light editing and older games.</li>
                                </ul>
                            </div>
                            <div class="list-section"><strong>Mid (modern, balanced)</strong>
                                <ul>
                                    <li>Ryzen 5 5600X – 6 cores, efficient and perfect for gaming.</li>
                                    <li>Ryzen 7 7700X – 8 cores, strong mix of gaming + multitasking.</li>
                                </ul>
                            </div>
                            <div class="list-section"><strong>Powerful (high-end, latest)</strong>
                                <ul>
                                    <li>Ryzen 9 7950X – 16 cores, amazing for editing, 3D, and multitasking.</li>
                                    <li>Ryzen 9 9950X – Next-gen beast, designed for professionals.</li>
                                </ul>
                            </div>
                        </div>
                    `;

                    article.appendChild(lists);

                    // New order: Intro -> Lists -> Brands -> Conclusion
                    article.appendChild(intro);
                    article.appendChild(lists);
                    article.appendChild(brands);
                    // CPUs to avoid section
                    const avoid = document.createElement('div');
                    avoid.className = 'cpu-avoid';
                    avoid.innerHTML = `
                        <h3 class="avoid-title">CPU's TO AVOID</h3>
                        <div class="avoid-grid">
                            <div class="avoid-col">
                                <h4 class="avoid-vendor blue">🔵 Intel</h4>
                                <ul>
                                    <li>Core 2 Duo / Core 2 Quad – Very old, too slow for modern use.</li>
                                    <li>1st–4th Gen Intel Core (i3, i5, i7 2xxx–4xxx) – Outdated, weak for new software.</li>
                                    <li>Pentium & Celeron (older models) – Very slow, not good for gaming or multitasking.</li>
                                    <li>Old Xeon CPUs – Made for servers, not good for normal PCs anymore.</li>
                                </ul>
                            </div>
                            <div class="avoid-col">
                                <h4 class="avoid-vendor red">🔴 AMD</h4>
                                <ul>
                                    <li>AMD A-Series (A4, A6, A8, A10) – Weak “APU” chips, outdated.</li>
                                    <li>Athlon (old versions) – Very slow, not worth using today.</li>
                                    <li>FX-Series (FX-4100, FX-8350, etc.) – Power-hungry and outdated.</li>
                                    <li>Early Ryzen 1st Gen (1000 series) – Still usable, but not recommended compared to newer ones.</li>
                                </ul>
                            </div>
                        </div>
                    `;

                    article.appendChild(avoid);
                    article.appendChild(conclusion);

                    content.appendChild(article);
                } else {
                    if (comp === 'tips') {
                        const tips = document.createElement('div');
                        tips.className = 'tips-article';
                        tips.innerHTML = `
                            <h2>Tips & Tricks</h2>
                            <p>Welcome to Tips & Tricks — quick guidance to help you pick and troubleshoot PC parts. Content coming soon.</p>
                            <ul>
                                <li>Check compatibility between CPU and motherboard sockets.</li>
                                <li>Keep drivers and BIOS up to date for best stability.</li>
                                <li>Use trusted power supplies with enough wattage and efficiency.</li>
                            </ul>
                        `;
                        content.appendChild(tips);
                    } else {
                        const box = document.createElement('div');
                        box.className = 'component-box';
                        box.textContent = comp.toUpperCase();
                        content.appendChild(box);
                    }
                }
            }
        });
    });

    // On load, if there's a hash (e.g., #cpu), simulate click on corresponding tab
    const hash = (location.hash || '').replace('#', '');
    if (hash) {
        const target = Array.from(links).find(l => l.getAttribute('data-component') === hash);
        if (target) target.click();
    }

    // Also listen for hash changes (so clicking an in-page CTA to #tips opens the tab)
    window.addEventListener('hashchange', function () {
        const newHash = (location.hash || '').replace('#', '');
        if (!newHash) return;
        const target = Array.from(links).find(l => l.getAttribute('data-component') === newHash);
        if (target) target.click();
    });

    // Ensure the bottom CTA reliably opens the Tips tab even if hash doesn't change
    const tipsCta = document.querySelector('.tips-cta');
    if (tipsCta) {
        tipsCta.addEventListener('click', function (ev) {
            ev.preventDefault();
            const target = Array.from(links).find(l => l.getAttribute('data-component') === 'tips');
            if (target) {
                // set hash so URL reflects the tab, then trigger the nav click
                try { location.hash = 'tips'; } catch (e) {}
                target.click();
                // scroll content into view smoothly
                const contentEl = document.getElementById('component-content');
                if (contentEl && typeof contentEl.scrollIntoView === 'function') {
                    contentEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            } else {
                // fallback: just set the hash
                location.hash = 'tips';
            }
        });
    }
});
