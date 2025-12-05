async function fetchWantedCharactorData() {
    return await fetch("data/wanted-characters.json")
        .then(response => response.json())
        .then(data => {
            const groupedData = data.reduce((acc, dat,) => {
                // console.log("dat =", dat);
                const { ip, type } = dat;
                if (acc[ip]) {
                    acc[ip].push(dat);
                }
                else if (type == "G") {
                    acc["其他游戏"] = acc["其他游戏"] || [];
                    acc["其他游戏"].push(dat);
                }
                else {
                    acc["其他"] = acc["其他"] || [];
                    acc["其他"].push(dat);
                }
                return acc;
            }, { "其他": [], "原神": [], "阴阳师": [], "命运：冠位指定": [], "其他游戏": [] });
            // console.log("groupedData =", groupedData);
            return groupedData;
        });
}

document.addEventListener("DOMContentLoaded", async () => {
    const container = document.getElementById("wanted-character-container-root");
    const gdata = await fetchWantedCharactorData();
    for (let key in gdata) {
        const items = gdata[key];

        const section = document.createElement("div");
        section.classList.add("d-flex");
        section.classList.add("flex-wrap");
        section.classList.add("wanted-character-flex-container");

        items/*.sort((a, b) => a.name.localeCompare(b.name, 'zh-CN'))*/
            .forEach(item => {
                // console.log("item =", item);
                const { name, level, mark, desc } = item;
                const p = document.createElement("p");
                p.classList.add("bg-success-subtle");
                p.classList.add("wanted-character-flex-item");
                if (level > 1) {
                    p.classList.add(`wanted-character-flex-item-hot-${level - 1}`); // 热度等级
                }
                p.innerText = name;
                if (mark) {
                    mark.forEach(mark => {
                        const badge = document.createElement("sup");
                        badge.classList.add("text-bg-success");
                        badge.classList.add("badge");
                        badge.classList.add("badge-pill");
                        badge.classList.add("badge-info");
                        badge.innerText = mark;
                        p.appendChild(badge);
                    });
                }
                if (desc) {
                    const descBadge = document.createElement("sup");
                    descBadge.classList.add("bg-info");
                    descBadge.classList.add("badge");
                    descBadge.classList.add("badge-pill");
                    descBadge.classList.add("badge-info");
                    descBadge.innerText = desc;
                    p.appendChild(descBadge);
                }
                section.appendChild(p);
            });

        if (key != "其他") {
            const header = document.createElement("h4");
            header.style.display = "block";
            header.innerText = key;
            container.appendChild(header);
        }

        container.appendChild(section);
    }
});