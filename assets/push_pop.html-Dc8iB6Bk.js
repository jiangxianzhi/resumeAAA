import{_ as a,r as p,o as t,c as e,b as n,d as o,e as c,a as l}from"./app-in_WKorJ.js";const i={},u=l(`<h1 id="栈的压入、弹出序列" tabindex="-1"><a class="header-anchor" href="#栈的压入、弹出序列"><span>栈的压入、弹出序列</span></a></h1><h2 id="描述" tabindex="-1"><a class="header-anchor" href="#描述"><span>描述</span></a></h2><p>输入两个整数序列，第一个序列表示栈的压入顺序，请判断第二个序列是否可能为该栈的弹出顺序。假设压入栈的所有数字均不相等。例如序列1,2,3,4,5是某栈的压入顺序，序列4,5,3,2,1是该压栈序列对应的一个弹出序列，但4,3,5,1,2就不可能是该压栈序列的弹出序列。</p><ol><li>0&lt;=pushV.length == popV.length &lt;=1000</li><li>-1000&lt;=pushV[i]&lt;=1000</li><li>pushV 的所有数字均不相同</li></ol><h2 id="思路" tabindex="-1"><a class="header-anchor" href="#思路"><span>思路</span></a></h2><p>这是一个利用入栈顺序，判断出栈顺序是否合理的题目。 我们干脆模拟这个过程，设置一个栈，同时利用在出入栈顺序各设置一个指针来模拟整个情况。</p><h2 id="答案" tabindex="-1"><a class="header-anchor" href="#答案"><span>答案</span></a></h2><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
bool <span class="token function">IsPopOrder</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token operator">*</span> pushV<span class="token punctuation">,</span> <span class="token keyword">int</span> pushVLen<span class="token punctuation">,</span> <span class="token keyword">int</span><span class="token operator">*</span> popV<span class="token punctuation">,</span> <span class="token keyword">int</span> popVLen <span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token keyword">int</span> stack<span class="token punctuation">[</span>pushVLen<span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token comment">//栈</span>
<span class="token keyword">int</span> point <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span><span class="token comment">//栈指针</span>
<span class="token keyword">int</span> in <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span><span class="token comment">//pushV 指针</span>
<span class="token keyword">int</span> out <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span><span class="token comment">//popV指针</span>
<span class="token keyword">while</span><span class="token punctuation">(</span>in<span class="token operator">&lt;</span>pushVLen<span class="token operator">&amp;&amp;</span>out<span class="token operator">&lt;</span>popVLen<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">// 不相同就入栈，直到相同或超出范围</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>in<span class="token operator">&lt;</span>pushVLen<span class="token operator">&amp;&amp;</span>pushV<span class="token punctuation">[</span>in<span class="token punctuation">]</span><span class="token operator">!=</span>popV<span class="token punctuation">[</span>out<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        stack<span class="token punctuation">[</span><span class="token operator">++</span>point<span class="token punctuation">]</span> <span class="token operator">=</span> pushV<span class="token punctuation">[</span>in<span class="token operator">++</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 相同情况，碰到先入栈</span>
    stack<span class="token punctuation">[</span><span class="token operator">++</span>point<span class="token punctuation">]</span> <span class="token operator">=</span> pushV<span class="token punctuation">[</span>in<span class="token operator">++</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token comment">// 出栈，直到不同为止</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>point<span class="token operator">&gt;</span><span class="token operator">-</span><span class="token number">1</span><span class="token operator">&amp;&amp;</span>stack<span class="token punctuation">[</span>point<span class="token punctuation">]</span><span class="token operator">==</span>popV<span class="token punctuation">[</span>out<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        out<span class="token operator">++</span><span class="token punctuation">;</span>
        point<span class="token operator">--</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">if</span><span class="token punctuation">(</span>point<span class="token operator">&lt;</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> true<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token punctuation">{</span>
<span class="token keyword">return</span> false<span class="token punctuation">;</span>
<span class="token punctuation">}</span>


<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),r={id:"题目网站",tabindex:"-1"},k={class:"header-anchor",href:"#题目网站"},d={href:"https://www.nowcoder.com/practice/d77d11405cc7470d82554cb392585106?tpId=308&tqId=23290&ru=/exam/oj&qru=/ta/algorithm-start/question-ranking&sourceUrl=%2Fexam%2Foj%3Fpage%3D1%26tab%3D%25E7%25AE%2597%25E6%25B3%2595%25E7%25AF%2587%26topicId%3D308",target:"_blank",rel:"noopener noreferrer"};function m(v,h){const s=p("ExternalLinkIcon");return t(),e("div",null,[u,n("h2",r,[n("a",k,[n("span",null,[n("a",d,[o("题目网站"),c(s)])])])])])}const _=a(i,[["render",m],["__file","push_pop.html.vue"]]),w=JSON.parse('{"path":"/algorithm/stack/push_pop.html","title":"栈的压入、弹出序列","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"描述","slug":"描述","link":"#描述","children":[]},{"level":2,"title":"思路","slug":"思路","link":"#思路","children":[]},{"level":2,"title":"答案","slug":"答案","link":"#答案","children":[]},{"level":2,"title":"题目网站","slug":"题目网站","link":"#题目网站","children":[]}],"git":{},"filePathRelative":"algorithm/stack/push&pop.md"}');export{_ as comp,w as data};
