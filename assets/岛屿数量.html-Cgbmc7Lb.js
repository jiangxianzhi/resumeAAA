import{_ as a,r as p,o as t,c as e,b as n,d as o,e as c,a as l}from"./app-in_WKorJ.js";const i={},u=l(`<h1 id="岛屿数量" tabindex="-1"><a class="header-anchor" href="#岛屿数量"><span>岛屿数量</span></a></h1><h2 id="描述" tabindex="-1"><a class="header-anchor" href="#描述"><span>描述</span></a></h2><p>给一个01矩阵，1代表是陆地，0代表海洋， 如果两个1相邻，那么这两个1属于同一个岛。我们只考虑上下左右为相邻。 岛屿: 相邻陆地可以组成一个岛屿（相邻:上下左右） 判断岛屿个数。<br> 例子：<br> [[1,1,0,0,0],<br> [0,1,0,1,1],<br> [0,0,0,1,1],<br> [0,0,0,0,0],<br> [0,0,1,1,1]]<br> 3个</p><h2 id="思路" tabindex="-1"><a class="header-anchor" href="#思路"><span>思路</span></a></h2><p>遍历每个点+bfs <br> 拿到一个点，如果这个点是“1”，那么把他和他的四周全变成2， 直到遍历所有都是1的点都变成2</p><h2 id="答案" tabindex="-1"><a class="header-anchor" href="#答案"><span>答案</span></a></h2><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token comment">/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 判断岛屿数量
 * @param grid char字符型二维数组
 * @param gridRowLen int grid数组行数
 * @param gridColLen int* grid数组列数
 * @return int整型
 */</span>
<span class="token keyword">int</span> <span class="token function">solve</span><span class="token punctuation">(</span><span class="token keyword">char</span><span class="token operator">*</span><span class="token operator">*</span> grid<span class="token punctuation">,</span> <span class="token keyword">int</span> gridRowLen<span class="token punctuation">,</span> <span class="token keyword">int</span><span class="token operator">*</span> gridColLen <span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// write code here</span>

<span class="token comment">// 暂存队列</span>
    <span class="token keyword">int</span> tmpArray<span class="token punctuation">[</span><span class="token number">1000000</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> head <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> tail <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    tail<span class="token operator">++</span><span class="token punctuation">;</span>
<span class="token comment">//移动方向</span>
    <span class="token keyword">int</span> dx<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> dy<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">// 计数</span>
    <span class="token keyword">int</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> gridRowLen<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> gridColLen<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

            <span class="token keyword">if</span> <span class="token punctuation">(</span>grid<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token char">&#39;1&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                count<span class="token operator">++</span><span class="token punctuation">;</span>
                <span class="token comment">// 把他附近的全部变成2</span>
                grid<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
                tmpArray<span class="token punctuation">[</span>tail<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> i<span class="token punctuation">;</span>
                tmpArray<span class="token punctuation">[</span>tail<span class="token operator">++</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> j<span class="token punctuation">;</span>
                <span class="token keyword">while</span> <span class="token punctuation">(</span>head <span class="token operator">&lt;</span> tail<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token keyword">int</span> x1 <span class="token operator">=</span> tmpArray<span class="token punctuation">[</span>head<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
                    <span class="token keyword">int</span> y1 <span class="token operator">=</span> tmpArray<span class="token punctuation">[</span>head<span class="token operator">++</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
                    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> k <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> k <span class="token operator">&lt;</span> <span class="token number">4</span><span class="token punctuation">;</span> k<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                        <span class="token keyword">int</span> x2 <span class="token operator">=</span> x1 <span class="token operator">+</span> dx<span class="token punctuation">[</span>k<span class="token punctuation">]</span><span class="token punctuation">;</span>
                        <span class="token keyword">int</span> y2 <span class="token operator">=</span> y1 <span class="token operator">+</span> dy<span class="token punctuation">[</span>k<span class="token punctuation">]</span><span class="token punctuation">;</span>
                        <span class="token keyword">if</span> <span class="token punctuation">(</span>x2 <span class="token operator">&gt;=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> x2 <span class="token operator">&lt;</span> gridRowLen <span class="token operator">&amp;&amp;</span> y2 <span class="token operator">&gt;=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> y2 <span class="token operator">&lt;</span> gridColLen<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span>
                                grid<span class="token punctuation">[</span>x2<span class="token punctuation">]</span><span class="token punctuation">[</span>y2<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token char">&#39;1&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                            grid<span class="token punctuation">[</span>x2<span class="token punctuation">]</span><span class="token punctuation">[</span>y2<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
                            tmpArray<span class="token punctuation">[</span>tail<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> x2<span class="token punctuation">;</span>
                            tmpArray<span class="token punctuation">[</span>tail<span class="token operator">++</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> y2<span class="token punctuation">;</span>

                        <span class="token punctuation">}</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>

        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span>  count<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),r={id:"题目网站",tabindex:"-1"},k={class:"header-anchor",href:"#题目网站"},d={href:"https://www.nowcoder.com/practice/0c9664d1554e466aa107d899418e814e?tpId=308&tqId=1024684&ru=/exam/oj&qru=/ta/algorithm-start/question-ranking&sourceUrl=%2Fexam%2Foj",target:"_blank",rel:"noopener noreferrer"};function m(v,b){const s=p("ExternalLinkIcon");return t(),e("div",null,[u,n("h2",r,[n("a",k,[n("span",null,[n("a",d,[o("题目网站"),c(s)])])])])])}const y=a(i,[["render",m],["__file","岛屿数量.html.vue"]]),w=JSON.parse('{"path":"/algorithm/queue/%E5%B2%9B%E5%B1%BF%E6%95%B0%E9%87%8F.html","title":"岛屿数量","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"描述","slug":"描述","link":"#描述","children":[]},{"level":2,"title":"思路","slug":"思路","link":"#思路","children":[]},{"level":2,"title":"答案","slug":"答案","link":"#答案","children":[]},{"level":2,"title":"题目网站","slug":"题目网站","link":"#题目网站","children":[]}],"git":{},"filePathRelative":"algorithm/queue/岛屿数量.md"}');export{y as comp,w as data};
