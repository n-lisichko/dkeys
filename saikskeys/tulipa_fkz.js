var dataset = "Tulipa";

var binary = true;
var exclusive_mode = true;
var remove_mode = false;

var chars = [[ "unused"],
["1. <b>+</b> нити тычинок голые. . . . <strong>2</strong> <br> <b>—</b> нити тычинок волосистые или с волосистым кольцом при основании. . . .  <strong>21</strong>","<b>+</b><i>2</i>","<b>-</b><i>21</i>"],
["2. <b>+</b> столбика нет, рыльце сидячее или почти сидячее. . . . <strong>3</strong> <br> <b>—</b> столбик есть, ясно выраженный, равный завязи. . . .  <strong>31</strong>","<b>+</b><i>3</i>","<b>-</b><i>31</i>"],
["3. <b>+</b> пыльники постепенно и медленно от верхушки к основанию раскрывающиеся, скручивающиеся. . . . <strong>kaufmanniana</strong> <br> <b>—</b> пыльники быстро раскрывающиеся, не скручивающиеся. . . .  <strong>4</strong>","<b>+</b><i></i>","<b>-</b><i>4</i>"],
["4. <b>+</b> пыльники в несколько раз длиннее нитей, листочки околоцветника 20-30 мм дл., светло-желтые, острые, снаружи пушистые. . . . <strong>krauseana</strong> <br> <b>—</b> пыльники короче или не больше чем в 3 раза длиннее нитей, растения с иной суммой признаков. . . .  <strong>5</strong>","<b>+</b><i></i>","<b>-</b><i>5</i>"],
["5. <b>+</b> оболочки луковиц, продолженные в волокнистую трубку, охватывающую подземную часть стебля до поверхности почвы, с внутренней стороны по всей поверхности волосисто-шерстистые. . . . <strong>6</strong> <br> <b>—</b> оболочки луковиц не или слабо продолженные или если сильно продолженные, то лишь у верхушки прижато волосистые или паутинисто-шерстистые, в нижней же части голые. . . .  <strong>8</strong>","<b>+</b><i>6</i>","<b>-</b><i>8</i>"],
["6. <b>+</b> надземная часть растения в 1,5— 2 раза короче подземной, верхние листья превышают цветок или достигают его, листочки околоцветника постепенно заостренные, с обеих сторон с темно-фиолетовым пятном. . . . <strong>borszczovii</strong> <br> <b>—</b> надземная часть растения лишь немного короче подземной, верхние листья не превышают цветок, листочки околоцветника внезапно заостренные. . . .  <strong>7</strong>","<b>+</b><i></i>","<b>-</b><i>7</i>"],
["7. <b>+</b> листочки околоцветника без пятна при основании. . . . <strong>behmiana</strong> <br> <b>—</b> листочки околоцветника с внутренней стороны, реже с обеих сторон с чернофиолетовым пятном при основании. . . .  <strong>lehmanniana</strong>","<b>+</b><i></i>","<b>-</b><i></i>"],
["8. <b>+</b> , листочки околоцветника 15 — 25, редко 30 мм дл., белые, при основании желтые, по отцветании слегка розовеющие, наружные снаружи грязновато-фиолетовые, внутренние внезапно суженные в ноготок. . . . <strong>sogdiana</strong> <br> <b>—</b> листьев 3 или несколько, растения крупные, с яркими цветками или небольшие горные с иными признаками. . . .  <strong>9</strong>","<b>+</b><i></i>","<b>-</b><i>9</i>"],
["9. <b>+</b> стебли в верхней части и цветоножки пушистые. . . . <strong>10</strong> <br> <b>—</b> стебли и цветоножки голые. . . .  <strong>15</strong>","<b>+</b><i>10</i>","<b>-</b><i>15</i>"],
["10. <b>+</b> внутренние листочки околоцветника короче наружных, вогнутые, на верхушке выемчатые, сходящиеся, листья ярко-сизые, по краям курчавые, сближенные, нижний широко продолговатый или почти эллиптический, остальные кверху быстро уменьшающиеся. . . . <strong>albertii</strong> <br> <b>—</b> внутренние листочки околоцветника не вогнутые, тупые или острые. . . .  <strong>11</strong>","<b>+</b><i></i>","<b>-</b><i>11</i>"],
["11. <b>+</b> листочки околоцветника желтоватые или желтые, наружные снаружи с фиолетовым оттенком. . . . <strong>12</strong> <br> <b>—</b> листочки околоцветника красных или розовых окрасок, иногда желтые или белые, наружные снаружи без фиолетового оттенка. . . .  <strong>14</strong>","<b>+</b><i>12</i>","<b>-</b><i>14</i>"],
["12. <b>+</b> оболочки луковиц с внутренней стороны по всей поверхности волосистые. . . . <strong>13</strong> <br> <b>—</b> оболочки луковиц тонкокожистые, с внутренней стороны только у верхушки прижато волосистые, нижний лист почти ремневидный или линейно-ланцетный. . . .  <strong>iliensis</strong>","<b>+</b><i>13</i>","<b>-</b><i></i>"],
["13. <b>+</b> листочки околоцветника острые или островатые, наружные едва короче внутренних, нижний лист яйцевидный или продолговато-яйцевидный, пыльники в 1,5 раза короче нитей. . . . <strong>dubia</strong> <br> <b>—</b> листочки околоцветника заостренные, наружные слегка длиннее внутренних, нижний лист ланцетный, пыльники в 1,5 — 2 раза длиннее нитей. . . .  <strong>altaica</strong>","<b>+</b><i></i>","<b>-</b><i></i>"],
["14. <b>+</b> листья крапчатые с фиолетовыми пятнами, внутренние листочки околоцветника слегка длиннее наружных, все красные или красно-оранжевые (очень редко желтые), при основании желтые с черным пятном. . . . <strong>greigii</strong> <br> <b>—</b> листья не крапчатые, внутренние листочки околоцветника равные или короче наружных, окраска листочков красная, розовая, желтая или белая с черным или желтым пятном при основании или без него. . . .  <strong>schrenkii</strong>","<b>+</b><i></i>","<b>-</b><i></i>"],
["15. <b>+</b> листочки околоцветника красные или розовые, реже желтые или белые, снаружи без фиолетового или красноватого оттенка. . . . <strong>16</strong> <br> <b>—</b> листочки околоцветника белые, желтоватые или желтые, изредка красные, наружные снаружи с красноватым или грязно-фиолетовым оттенком, редко без него. . . .  <strong>17</strong>","<b>+</b><i>16</i>","<b>-</b><i>17</i>"],
["16. <b>+</b> оболочки луковиц тонкокожистые, черно-бурые, с внутренней строны по всей поверхности волосистые, околоцветник красный, розовый, желтый или белый. . . . <strong>schrenkii</strong> <br> <b>—</b> оболочки луковиц кожистые, черные, продолженные и с внутренней стороны у верхушки шерстисто-волосистые, околоцветник красный, листья обычно превышают цветок. . . .  <strong>korolkovii</strong>","<b>+</b><i></i>","<b>-</b><i></i>"],
["17. <b>+</b> нити тычинок при основании расширенные, а выше середины суженные в тонкий кончик. . . . <strong>18</strong> <br> <b>—</b> нити тычинок от основания постепенно суженные. . . .  <strong>20</strong>","<b>+</b><i>18</i>","<b>-</b><i>20</i>"],
["18. <b>+</b> стебель 6— 15 см выс., оболочки луковиц тонкокожистые, почти бумагообразные, нижний лист линейный, 0,7 — 1 см шир. . . . <strong>tianschanica</strong> <br> <b>—</b> стебель 15 — 35 см выс., оболочки луковиц крупные, кожистые, нижние листья 1 — 3 см шир.. . . .  <strong>19</strong>","<b>+</b><i></i>","<b>-</b><i>19</i>"],
["19. <b>+</b> листьев 5 — 6, реже 3 — 4 или до 7, они сильно сближены, почти все ремневидные, 1 — 1,5 см шир., листочки околоцветника внутри желтые, тычинки в 3 раза короче околоцветника. . . . <strong>tetraphylla</strong> <br> <b>—</b> листьев 3 — 4, они расставленные, нижний линейно-ланцетный, до 3 см шир., листочки околоцветника внутри желтые, посередине с продольным ярко-красным мазком, тычинки в 2 раза короче околоцветника. . . .  <strong>brachystemon</strong>","<b>+</b><i></i>","<b>-</b><i></i>"],
["20. <b>+</b> листочки околоцветника желтые, без пятна при основании, листья обычно превышают цветок. . . . <strong>kolpakovskiana</strong> <br> <b>—</b> листочки околоцветника красные, с черным пятном при основании, листья обычно не превышают цветок. . . .  <strong>ostrovskiana</strong>","<b>+</b><i></i>","<b>-</b><i></i>"],
["21. <b>+</b> лист одиночный, эллиптический, с продольными извилисто-гребневидными выростами на верхней стороне, околоцветник внутри белый, снаружи грязно-красноватый. . . . <strong>regelii</strong> <br> <b>—</b> листьев 2 или несколько, всегда без гребневидных выростов. . . .  <strong>22</strong>","<b>+</b><i></i>","<b>-</b><i>22</i>"],
["22. <b>+</b> оболочки луковиц внутри голые или у самой верхушки с немногими прижатыми волосками, завязь с сравнительно длинным столбиком. . . . <strong>23</strong> <br> <b>—</b> оболочки луковиц внутри по всей поверхности паутинисто-шерстистые или у верхушки шерстистые или более или менее густо прижато волосистые. . . .  <strong>24</strong>","<b>+</b><i>23</i>","<b>-</b><i>24</i>"],
["23. <b>+</b> листьев 3 — 7, сильно сближенных, отогнутых, цветков 1 — 8, оболочки луковиц тонкокожистые, внутри голые. . . . <strong>tarda</strong> <br> <b>—</b> листьев 2, расставленных, отклоненных, цветок одиночный, оболочки луковиц бумагообразные, внутри голые или у самой верхушки с немногими прижатыми волосками. . . .  <strong>dasystemon</strong>","<b>+</b><i></i>","<b>-</b><i></i>"],
["24. <b>+</b> оболочки луковиц у верхушки более или менее густо прижато волосистые, пыльники без остроконечия. . . . <strong>25</strong> <br> <b>—</b> оболочки луковиц по всей поверхности внутри паутинисто-шерстистые или у верхушки более или менее густо шерстисто-волосистые, пыльники с коротким остроконечием, листьев обычно 2. . . .  <strong>26</strong>","<b>+</b><i>25</i>","<b>-</b><i>26</i>"],
["25. <b>+</b> листочки околоцветника желтые, наружные часто снаружи с грязно-фиолетовым оттенком. . . . <strong>biebersteiniana</strong> <br> <b>—</b> листочки околоцветника внутри беловатые или розоватые, при основании желтые, наружные снаружи зеленоватые или розово-фиолетовые. . . .  <strong>patens</strong>","<b>+</b><i></i>","<b>-</b><i></i>"],
["26. <b>+</b> оболочки луковиц с внутренней стороны у верхушки шерстисто-волосистые. . . . <strong>27</strong> <br> <b>—</b> оболочки луковиц с внутренней стороны по всей поверхности паутинисто-шерстистые. . . .  <strong>28</strong>","<b>+</b><i>27</i>","<b>-</b><i>28</i>"],
["27. <b>+</b> оболочки луковиц тонкокожистые, цветок одиночный, околоцветник бледно-желтый, столбик довольно длинный, равный почти половине завязи. . . . <strong>dasystemonoides</strong> <br> <b>—</b> оболочки луковиц жесткие, кожистые, цветков 2 — 3, околоцветник белый, с желтым пятном в основании, столбик более короткий, листья значительно короче цветка. . . .  <strong>buhseana</strong>","<b>+</b><i></i>","<b>-</b><i></i>"],
["28. <b>+</b> оболочки луковицы тонкие, бумагообразные, листья расставленные, пыльники 2 — 3 м м дл., столбик короткий. . . . <strong>biflora</strong> <br> <b>—</b> оболочки луковиц жесткие, кожистые, пыльники 3 — 6 мм дл.. . . .  <strong>29</strong>","<b>+</b><i></i>","<b>-</b><i>29</i>"],
["29. <b>+</b> растение бесстебельное, цветонос неразвитый, а потому цветы, в числе 2 — 7, сближены в виде букетика на равных цветоножках при основании почти супротивных листьев. . . . <strong>orthopoda</strong> <br> <b>—</b> растения со стеблями и развитыми цветоносами, цветов 2 — 5. . . .  <strong>30</strong>","<b>+</b><i></i>","<b>-</b><i>30</i>"],
["30. <b>+</b> бутоны поникшие, молодые коробочки торчащие, оболочки луковицы внутри равномерно паутинисто-шерстистые. . . . <strong>bifloriformis</strong> <br> <b>—</b> бутоны и молодые коробочки поникающие, оболочки луковицы внутри, особенно густо у верхушки, паутинисто-шерстистые. . . .  <strong>binutans</strong>","<b>+</b><i></i>","<b>-</b><i></i>"],
["31. <b>+</b> оболочки луковицы с внутренней стороны голые, листья супротивные, пыльники продолговато-эллиптические, около 2,5 мм дл.. . . . <strong>heterophylla</strong> <br> <b>—</b> оболочки луковиц с внутренней стороны у верхушки прижато волосистые, листья очередные, пыльники 3 — 6 мм дл.. . . .  <strong>32</strong>","<b>+</b><i></i>","<b>-</b><i>32</i>"],
["32. <b>+</b> листья более или менее сближенные, обычно отогнутые, листочки околоцветника тупые или туповатые, нити тычинок от основания постепенно суженные. . . . <strong>uniflora</strong> <br> <b>—</b> листья сильно расставленные, отклоненные, листочки околоцветника очень острые, нити тычинок ниже середины расширенные. . . .  <strong>heteropetala</strong>","<b>+</b><i></i>","<b>-</b><i></i>"],
];


var items=[ [""],
["kaufmanniana", "1","1","1","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?"],
["krauseana", "1","1","2","1","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?"],
["borszczovii", "1","1","2","2","1","1","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?"],
["behmiana", "1","1","2","2","1","2","1","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?"],
["lehmanniana", "1","1","2","2","1","2","2","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?"],
["sogdiana", "1","1","2","2","2","?","?","1","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?"],
["albertii", "1","1","2","2","2","?","?","2","1","1","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?"],
["iliensis", "1","1","2","2","2","?","?","2","1","2","1","2","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?"],
["dubia", "1","1","2","2","2","?","?","2","1","2","1","1","1","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?"],
["altaica", "1","1","2","2","2","?","?","2","1","2","1","1","2","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?"],
["greigii", "1","1","2","2","2","?","?","2","1","2","2","?","?","1","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?"],
["schrenkii", "1","1","2","2","2","?","?","2","2","?","?","?","?","?","1","1","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?"],
["korolkovii", "1","1","2","2","2","?","?","2","2","?","?","?","?","?","1","2","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?"],
["tianschanica", "1","1","2","2","2","?","?","2","2","?","?","?","?","?","2","?","1","1","?","?","?","?","?","?","?","?","?","?","?","?","?"],
["tetraphylla", "1","1","2","2","2","?","?","2","2","?","?","?","?","?","2","?","1","2","1","?","?","?","?","?","?","?","?","?","?","?","?"],
["brachystemon", "1","1","2","2","2","?","?","2","2","?","?","?","?","?","2","?","1","2","2","?","?","?","?","?","?","?","?","?","?","?","?"],
["kolpakovskiana", "1","1","2","2","2","?","?","2","2","?","?","?","?","?","2","?","2","?","?","1","?","?","?","?","?","?","?","?","?","?","?"],
["ostrovskiana", "1","1","2","2","2","?","?","2","2","?","?","?","?","?","2","?","2","?","?","2","?","?","?","?","?","?","?","?","?","?","?"],
["regelii", "2","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","1","?","?","?","?","?","?","?","?","?","?"],
["tarda", "2","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","2","1","1","?","?","?","?","?","?","?","?"],
["dasystemon", "2","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","2","1","2","?","?","?","?","?","?","?","?"],
["biebersteiniana", "2","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","2","2","?","1","1","?","?","?","?","?","?"],
["patens", "2","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","2","2","?","1","2","?","?","?","?","?","?"],
["dasystemonoides", "2","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","2","2","?","2","?","1","1","?","?","?","?"],
["buhseana", "2","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","2","2","?","2","?","1","2","?","?","?","?"],
["biflora", "2","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","2","2","?","2","?","2","?","1","?","?","?"],
["orthopoda", "2","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","2","2","?","2","?","2","?","2","1","?","?"],
["bifloriformis", "2","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","2","2","?","2","?","2","?","2","2","1","?"],
["binutans", "2","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","2","2","?","2","?","2","?","2","2","2","?"],
["heterophylla", "1","2","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","1"],
["uniflora", "1","2","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","2"],
["heteropetala", "1","2","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","2"]
];
