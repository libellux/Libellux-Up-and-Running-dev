"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[489],{5173:(e,n,s)=>{s.r(n),s.d(n,{data:()=>a});const a={key:"v-05c87ea8",path:"/wireguard/",title:"WireGuard Secure VPN Tunnel",lang:"en-US",frontmatter:{lang:"en-US",title:"WireGuard Secure VPN Tunnel",description:"WireGuard fast, modern, secure VPN tunnel"},excerpt:"",headers:[{level:2,title:"Configuration files",slug:"configuration-files",children:[]},{level:2,title:"Prerequisites",slug:"prerequisites",children:[]},{level:2,title:"Installation",slug:"installation",children:[]},{level:2,title:"Master server",slug:"master-server",children:[]},{level:2,title:"Client servers",slug:"client-servers",children:[]},{level:2,title:"Firewall settings",slug:"firewall-settings",children:[]},{level:2,title:"Troubleshooting",slug:"troubleshooting",children:[]},{level:2,title:"Recommended services",slug:"recommended-services",children:[{level:3,title:"Mullvad VPN",slug:"mullvad-vpn",children:[]}]}],filePathRelative:"wireguard/README.md",git:{updatedTime:1632680737e3,contributors:[{name:"Libellux",email:"fredrik@libellux.com",commits:14}]}}},4585:(e,n,s)=>{s.r(n),s.d(n,{default:()=>t});var a=s(6252),r=s(9763);const l={},t=(0,s(3744).Z)(l,[["ssrRender",function(e,n,s,l){const t=(0,a.up)("Badge"),i=(0,a.up)("OutboundLink");n('\x3c!--[--\x3e<h1 id="wireguard-secure-vpn-tunnel" tabindex="-1"><a class="header-anchor" href="#wireguard-secure-vpn-tunnel" aria-hidden="true">#</a> WireGuard Secure VPN Tunnel '),n((0,r.FG)(t,{text:"Rev 1",type:"tip"},null,s)),n('</h1><p>WireGuard is an extremely simple yet fast and modern VPN that utilizes state-of-the-art cryptography. WireGuard is designed as a general purpose VPN for running on embedded interfaces and super computers alike, fit for many different circumstances. Initially released for the Linux kernel, it is now cross-platform (Windows, macOS, BSD, iOS, Android) and widely deployable.</p><p><a href="https://www.wireguard.com/" target="_blank" rel="noopener noreferrer">WireGuard website'),n((0,r.FG)(i,null,null,s)),n('</a> <a href="https://www.wireguard.com/repositories/" target="_blank" rel="noopener noreferrer">Git'),n((0,r.FG)(i,null,null,s)),n('</a></p><p>Setup and configuration have been tested on following OS with version:</p><ul><li>Ubuntu- 18.04, 20.04 (Focal Fossa)</li><li>WireGuard- 1.0.2~</li></ul><p><a href="https://ko-fi.com/B0B31BJU3" target="_blank" rel="noopener noreferrer"><img src="https://www.ko-fi.com/img/githubbutton_sm.svg" alt="ko-fi">'),n((0,r.FG)(i,null,null,s)),n('</a></p><h2 id="configuration-files" tabindex="-1"><a class="header-anchor" href="#configuration-files" aria-hidden="true">#</a> Configuration files</h2><ul><li><a href="https://github.com/libellux/Libellux-Up-and-Running/blob/master/docs/wireguard/config/wg0.conf_server" target="_blank" rel="noopener noreferrer">wg0.conf'),n((0,r.FG)(i,null,null,s)),n('</a> (server)</li><li><a href="https://github.com/libellux/Libellux-Up-and-Running/blob/master/docs/wireguard/config/wg0.conf_client" target="_blank" rel="noopener noreferrer">wg0.conf'),n((0,r.FG)(i,null,null,s)),n('</a> (client)</li></ul><h2 id="prerequisites" tabindex="-1"><a class="header-anchor" href="#prerequisites" aria-hidden="true">#</a> Prerequisites</h2><ul><li><code>net-tools</code> (optional)</li></ul><h2 id="installation" tabindex="-1"><a class="header-anchor" href="#installation" aria-hidden="true">#</a> Installation</h2><p>In this example we will be configuring WireGuard on our servers to communicate securely over an encrypted virtual private network (VPN). This approach can be useful to secure communication in both cloud environments or any non-trusted network. We will set up one so called master server (<code>192.168.8.1</code>) along with two client servers (<code>192.168.8.2</code>, <code>192.168.8.3</code>). The public subnet (endpoint) is <code>192.168.0.0/24</code>.</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>WireGuard is now included in the Linux kernel since the 5.6 release.</p></div><h2 id="master-server" tabindex="-1"><a class="header-anchor" href="#master-server" aria-hidden="true">#</a> Master server</h2><p>First install WireGuard.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>server@ubuntu:~$ sudo apt-get install wireguard\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>Next generate a private and public key for the WireGuard server.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>server@ubuntu:~$ sudo -i\nroot@ubuntu:~$ cd /etc/wireguard/\nroot@ubuntu:~$ wg genkey | tee private.key | wg pubkey &gt; public.key\nroot@ubuntu:~$ chmod 077 private.key public.key\n</code></pre><div class="highlight-lines"><br><br><div class="highlight-line"> </div><br></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>Copy the private key and create the WireGuard configuration file (wg0.conf).</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>root@ubuntu:~$ cat private.key\nINroRZ79Rx7mWg8f7MrocxyK2SzTN4GHGw5jOvtpDOQ=\nroot@ubuntu:~$ nano wg0.conf\n</code></pre><div class="highlight-lines"><br><div class="highlight-line"> </div><br></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>In the configuration file proceed and define the subnet, port and private key for the VPN network.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>Interface<span class="token punctuation">]</span>\nAddress <span class="token operator">=</span> <span class="token number">192.168</span>.8.1/24\nListenPort <span class="token operator">=</span> <span class="token number">51820</span>\nPrivateKey <span class="token operator">=</span> <span class="token assign-left variable">INroRZ79Rx7mWg8f7MrocxyK2SzTN4GHGw5jOvtpDOQ</span><span class="token operator">=</span>\n</code></pre><div class="highlight-lines"><br><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>Proceed to enable WireGuard on boot and start it.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>root@ubuntu:~$ exit\nserver@ubuntu:~$ sudo systemctl enable wg-quick@wg0\nserver@ubuntu:~$ sudo systemctl start wg-quick@wg0\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>Next check if the interface is up using <code>ifconfig</code> (requires net-tools) or <code>ip</code>.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>server@ubuntu:~$ sudo ifconfig -a wg0\nwg0: flags=209&lt;UP,POINTOPOINT,RUNNING,NOARP&gt;  mtu 1420\n        inet 192.168.8.1  netmask 255.255.255.0  destination 192.168.8.1\n        unspec 00-00-00-00-00-00-00-00-00-00-00-00-00-00-00-00  txqueuelen 1000  (UNSPEC)\n        RX packets 0  bytes 0 (0.0 B)\n        RX errors 0  dropped 0  overruns 0  frame 0\n        TX packets 0  bytes 0 (0.0 B)\n        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0\nserver@ubuntu:~$ sudo ip a show wg0\n3: wg0: &lt;POINTOPOINT,NOARP,UP,LOWER_UP&gt; mtu 1420 qdisc noqueue state UNKNOWN group default qlen 1000\n    link/none\n    inet 192.168.8.1/24 scope global wg0\n       valid_lft forever preferred_lft forever\n</code></pre><div class="highlight-lines"><div class="highlight-line"> </div><br><br><br><br><br><br><br><div class="highlight-line"> </div><br><br><br><br></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h2 id="client-servers" tabindex="-1"><a class="header-anchor" href="#client-servers" aria-hidden="true">#</a> Client servers</h2><p>Install WireGuard at the first client machine.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>client@ubuntu:~$ sudo apt-get install wireguard\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>As root generate the private and public key.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>client@ubuntu:~$ sudo -i\nroot@ubuntu:~$ cd /etc/wireguard/\nroot@ubuntu:~$ wg genkey | tee private.key | wg pubkey &gt; public.key\nroot@ubuntu:~$ chmod 077 private.key public.key\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>Copy the private key and create the WireGuard configuration file.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>root@ubuntu:~$ cat private.key\nINroRZ79Rx7mWg8f7MrocxyK2SzTN4GHGw5jOvtpDOQ=\nroot@ubuntu:~$ nano wg0.conf\n</code></pre><div class="highlight-lines"><br><div class="highlight-line"> </div><br></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>In the configuration file proceed and define the IP address and private key for the VPN client. In the peer section define the public key (<code>cat public.key</code>) from the master server along with the subnet and public endpoint.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>Interface<span class="token punctuation">]</span>\nAddress <span class="token operator">=</span> <span class="token number">192.168</span>.8.2/24\nPrivateKey <span class="token operator">=</span> <span class="token assign-left variable">INroRZ79Rx7mWg8f7MrocxyK2SzTN4GHGw5jOvtpDOQ</span><span class="token operator">=</span>\n\n<span class="token punctuation">[</span>Peer<span class="token punctuation">]</span>\nPublicKey <span class="token operator">=</span> <span class="token assign-left variable">R688QTGKkMCGpJpwrHJ9yXBY5CxriqLGQLy6Agse2DE</span><span class="token operator">=</span>\nAllowedIPs <span class="token operator">=</span> <span class="token number">192.168</span>.8.0/24\nEndpoint <span class="token operator">=</span> <span class="token number">192.168</span>.0.1:51820\nPersistentKeepalive <span class="token operator">=</span> <span class="token number">15</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>Next copy the public key from the client machine and update the master server&#39;s WireGuard configuration (<code>wg0.conf</code>).</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>root@ubuntu:~$ cat public.key\nJ3+KjJXJDKN9UVLpdlo3UBrBVU1JOdahGQYqpRxbe00=\n</code></pre><div class="highlight-lines"><br><div class="highlight-line"> </div></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>In the master server&#39;s configuration file at the public key of the client machine under its peer section.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>Interface<span class="token punctuation">]</span>\nAddress <span class="token operator">=</span> <span class="token number">192.168</span>.8.1/24\nListenPort <span class="token operator">=</span> <span class="token number">51820</span>\nPrivateKey <span class="token operator">=</span> <span class="token assign-left variable">INroRZ79Rx7mWg8f7MrocxyK2SzTN4GHGw5jOvtpDOQ</span><span class="token operator">=</span>\n\n<span class="token punctuation">[</span>Peer<span class="token punctuation">]</span>\nPublicKey <span class="token operator">=</span> J3+KjJXJDKN9UVLpdlo3UBrBVU1JOdahGQYqpRxbe00<span class="token operator">=</span>\nAllowedIPs <span class="token operator">=</span> <span class="token number">192.168</span>.8.2/32\n</code></pre><div class="highlight-lines"><br><br><br><br><br><br><div class="highlight-line"> </div><br></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>Proceed to enable WireGuard on boot and start it.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>root@ubuntu:~$ exit\nclient@ubuntu:~$ sudo systemctl enable wg-quick@wg0\nclient@ubuntu:~$ sudo systemctl start wg-quick@wg0\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>Before we add the second client machine you can quickly test if the set up is working by sending a ping (ICMP) request between the client and server and vice versa. First make sure that you did open the required ports in your firewall (see <a href="#firewall-settings">Firewall settings</a>).</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>client@ubuntu:~$ ping 192.168.8.1\nPING 192.168.8.1 (192.168.8.1) 56(84) bytes of data.\n64 bytes from 192.168.8.1: icmp_seq=1 ttl=64 time=0.646 ms\nserver@ubuntu:~$ ping 192.168.8.2\nPING 192.168.8.2 (192.168.8.2) 56(84) bytes of data.\n64 bytes from 192.168.8.2: icmp_seq=1 ttl=64 time=0.424 ms\n</code></pre><div class="highlight-lines"><div class="highlight-line"> </div><br><br><div class="highlight-line"> </div><br><br></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>Once you&#39;ve confirmed that the connection between the master server and client works, proceed to set up your second client using the same approach as for the first client. Make sure to add the new client (peer) under the master server&#39;s WireGuard configuration.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>Interface<span class="token punctuation">]</span>\nAddress <span class="token operator">=</span> <span class="token number">192.168</span>.8.1/24\nListenPort <span class="token operator">=</span> <span class="token number">51820</span>\nPrivateKey <span class="token operator">=</span> <span class="token assign-left variable">INroRZ79Rx7mWg8f7MrocxyK2SzTN4GHGw5jOvtpDOQ</span><span class="token operator">=</span>\n\n<span class="token punctuation">[</span>Peer<span class="token punctuation">]</span>\nPublicKey <span class="token operator">=</span> J3+KjJXJDKN9UVLpdlo3UBrBVU1JOdahGQYqpRxbe00<span class="token operator">=</span>\nAllowedIPs <span class="token operator">=</span> <span class="token number">192.168</span>.8.2/32\n\n<span class="token punctuation">[</span>Peer<span class="token punctuation">]</span>\nPublicKey <span class="token operator">=</span> l2+KjJXJDKN8UbLadlz3U4rBxU1JOdahXFfqpRi0QrP<span class="token operator">=</span>\nAllowedIPs <span class="token operator">=</span> <span class="token number">192.168</span>.8.3/32\n</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><div class="highlight-line"> </div><br><br></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="firewall-settings" tabindex="-1"><a class="header-anchor" href="#firewall-settings" aria-hidden="true">#</a> Firewall settings</h2><p>The firewall being used is UFW (Uncomplicated Firewall). It is set by default to deny incoming traffic, allow outgoing traffic and allow port 22 (OpenSSH). Read more about UFW <a href="https://help.ubuntu.com/community/UFW" target="_blank" rel="noopener noreferrer">here'),n((0,r.FG)(i,null,null,s)),n('</a>.</p><details class="custom-container details"><summary>UFW Settings</summary><div class="language-console ext-console line-numbers-mode"><pre class="language-console"><code>server@ubuntu:~$ sudo ufw default deny incoming\nserver@ubuntu:~$ sudo ufw default allow outgoing\nserver@ubuntu:~$ sudo ufw allow 22\nserver@ubuntu:~$ sudo ufw enable\nCommand may disrupt existing ssh connections. Proceed with operation (y|n)? y\nFirewall is active and enabled on system startup\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div></details><div class="language-console ext-console line-numbers-mode"><pre class="language-console"><code>server@ubuntu:~$ sudo ufw allow proto udp from 192.168.8.0/32 to any port 51820 comment &quot;WireGuard&quot;\nclient@ubuntu:~§ sudo ufw allow proto udp from 192.168.8.1 to any port 51820 comment &quot;WireGuard server&quot;\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="troubleshooting" tabindex="-1"><a class="header-anchor" href="#troubleshooting" aria-hidden="true">#</a> Troubleshooting</h2><p>In case you&#39;ll need help troubleshooting your WireGuard set up you can always ask help at the <code>#wireguard</code> IRC channel on <a href="https://webchat.freenode.net/#wireguard" target="_blank" rel="noopener noreferrer">Freenode'),n((0,r.FG)(i,null,null,s)),n('</a>.</p><h2 id="recommended-services" tabindex="-1"><a class="header-anchor" href="#recommended-services" aria-hidden="true">#</a> Recommended services '),n((0,r.FG)(t,{text:"non-sponsored",type:"tip"},null,s)),n('</h2><h3 id="mullvad-vpn" tabindex="-1"><a class="header-anchor" href="#mullvad-vpn" aria-hidden="true">#</a> Mullvad VPN '),n((0,r.FG)(t,{text:"non-affiliate",type:"tip"},null,s)),n('</h3><p>Mullvad is a VPN service that helps keep your online activity, identity, and location private. They keep no activity logs, do not ask for personal information, and even encourage anonymous payments via cash or one of the cryptocurrencies they accept. Your IP address is replaced by one of theirs, ensuring that your device&#39;s activity and location are not linked to you.</p><p><a href="https://mullvad.net/en/" target="_blank" rel="noopener noreferrer">Mullvad VPN'),n((0,r.FG)(i,null,null,s)),n('</a></p><p>What we like about <a href="https://mullvad.net/en/" target="_blank" rel="noopener noreferrer">Mullvad VPN'),n((0,r.FG)(i,null,null,s)),n(`</a> is how easy it is to select which VPN protocol you prefer to use e.g. WireGuard and set custom DNS servers along with a very resonable price of only 5 EUR per month. It&#39;s also a great product and probably cheaper and faster than an internet provider where you&#39;ll still have to pay for your data.</p><img class="zoom-custom-imgs"${(0,r.x$)("src","/img/wireguard/mullvad.png")} alt="mullvad">\x3c!--]--\x3e`)}]])}}]);