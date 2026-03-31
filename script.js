
// ══════════════════════════════════════════════════════
// EXPERIMENT DATA (short — theory same as v3, trimmed for brevity)
// ══════════════════════════════════════════════════════
const EXPS=[
{id:1,col:'#00d4c8',num:'EXP 01',title:'Addition of Oscillations',sub:'Orthogonal SHM & Lissajous Figures',desc:'Pendulum under two perpendicular forces traces lines, ellipses, or circles based on phase difference.',tags:['LISSAJOUS','SHM','PHASE'],
 theory:{ug:{overview:'When two SHMs x(t)=A·cos(ωt+φₓ) and y(t)=B·cos(ωt+φᵧ) act perpendicularly, the resultant trajectory is a <strong>Lissajous Figure</strong>. The shape depends only on phase difference Δφ and amplitude ratio A/B.',derivation:'<strong>Parametric trajectory equation:</strong><br>x²/A² + y²/B² − 2(x/A)(y/B)·cos(Δφ) = sin²(Δφ)<br><br>This is a <em>general conic section</em>:<br>• Δφ=0°/180° → discriminant=0 → <strong>straight line</strong><br>• Δφ=90°, A=B → <strong>circle</strong><br>• otherwise → <strong>ellipse</strong><br><br><strong>Phase from initial conditions:</strong><br>tan(φ) = −v(0)/(ω·x(0))<br><br>At equilibrium: x(0)=0 → tan(φ)→∞ → φ=90° (hit at equilibrium → Δφ=90°)<br>At extreme: v(0)=0 → tan(φ)=0 → φ=0° or 180°',formula:`x(t) = A · cos(ωt + φₓ)\ny(t) = B · cos(ωt + φᵧ)\nΔφ = φₓ − φᵧ\n\ntan(φ) = −v(0) / (ω · x(0))\n\nΔφ=0°,180°  →  Line  (hit at EXTREME)\nΔφ=90°,A=B  →  Circle (hit at EQUILIBRIUM, equal amp)\nΔφ=90°,A≠B  →  Ellipse`},
  lay:{overview:'Imagine two swings at once — forward-back AND side-side. Depending on <strong>when</strong> you push sideways, you trace different shapes.',derivation:'🔵 Push at centre (same rhythm) → <strong>Straight line</strong><br><br>🔴 Push at farthest point with equal force → <strong>Circle</strong><br><br>🟡 Push at farthest point with different force → <strong>Ellipse</strong><br><br>These shapes are called <em>Lissajous Figures</em> — named after Jules Antoine Lissajous (1857).',formula:`Phase difference → Shape:\n  0° / 180°  →  Straight line\n  90°, A=B   →  Circle\n  90°, A≠B   →  Ellipse\n  other      →  Ellipse (tilted)`}},
 steps:[{t:'Setup Thread & Bob',d:'Tie ~0.3 m thread to bob. Suspend so bob barely clears graph paper.'},{t:'Draw Axes',d:'Mark X,Y axes on paper with origin under equilibrium.'},{t:'Straight Line — Hit at Extreme',d:'Swing in X. <b>At extreme position</b>, push in Y. Phase diff = 0°/180° → Line.'},{t:'Ellipse',d:'Swing in X. <b>At extreme position</b>, push in Y with <b>different amplitude</b> → Ellipse.'},{t:'Circle',d:'Swing in X. <b>At extreme position</b>, push in Y with <b>exactly equal amplitude</b> → Circle.'},{t:'Record',d:'For each trajectory note x(0),y(0),ẋ(0),ẏ(0). Calculate phases and Δφ.'}],
 graph:{xLabel:'Phase Difference Δφ (degrees)',yLabel:'Eccentricity e',xDefault:45,yDefault:0.70,tX:[0,20,40,60,80,100,120,140,160,180],tY:[1,0.97,0.88,0.74,0.49,0.16,0.49,0.74,0.88,1],note:'Theory: e = |cos(Δφ)| for A=B. e=1→line, e=0→circle'},
 apps:[{icon:'📡',n:'Circular Polarization',d:'90° phase-shifted antennas emit circularly polarized waves for satellite communications.'},{icon:'🎮',n:'Analog Joysticks',d:'Two perpendicular sensors combine to give 360° directional control in game controllers.'},{icon:'🔭',n:'Oscilloscope Calibration',d:'Lissajous figures precisely measure phase difference between two electrical signals.'},{icon:'🌊',n:'Ocean Wave Analysis',d:'Water particles in deep ocean trace elliptical paths combining horizontal and vertical motion.'}],
 errors:[{e:'Push not at correct position (equilibrium/extreme)',fix:'Mark equilibrium point on paper. Practice timing — takes 5–10 tries.'},{e:'Push not purely in Y-direction',fix:'Use a ruler as guide rail for the push. Keep wrist rigid.'},{e:'Large amplitude breaks small-angle approximation',fix:'Keep displacement < 5 cm.'},{e:'Pendulum period unequal in X vs Y',fix:'Measure both periods. Adjust thread length to equalize.'}]
},
{id:2,col:'#fbbf24',num:'EXP 02',title:'Normal Modes & Beats',sub:'Coupled Pendulums',desc:'Two pendulums linked by spring — in-phase, out-of-phase normal modes, energy-transfer beats.',tags:['COUPLING','BEATS','NORMAL MODES'],
 theory:{ug:{overview:'A coupled oscillator has two normal mode frequencies ω₁ (in-phase) and ω₂ (out-of-phase). Beats arise as a superposition of both modes when only one pendulum is displaced.',derivation:'<strong>EOM:</strong><br>mẍ₁ + mω₀²x₁ + k_c(x₁−x₂) = 0<br>mẍ₂ + mω₀²x₂ − k_c(x₁−x₂) = 0<br><br><strong>Normal coordinates:</strong><br>q₊ = x₁+x₂ → ω₁ = ω₀<br>q₋ = x₁−x₂ → ω₂ = √(ω₀²+2k_c/m)<br><br><strong>Beats:</strong><br>x₁(t) = A·cos[(ω₁+ω₂)t/2]·cos[(ω₂−ω₁)t/2]<br>x₂(t) = A·sin[(ω₁+ω₂)t/2]·sin[(ω₂−ω₁)t/2]',formula:`ω₁ = ω₀  (in-phase)\nω₂ = √(ω₀²+2kc/m)  (out-of-phase)\n\nω_beat = (ω₂−ω₁)/2\nω_fast = (ω₁+ω₂)/2\n\nT_beat = 2π/|ω₂−ω₁|\nVerify: T_b = 2×(time between standstills)`},
  lay:{overview:'Two swings connected by a rubber band — they can swing in two special ways called Normal Modes.',derivation:'🟢 <strong>Mode 1 (same direction):</strong> Band never stretches → swing at natural speed ω₀<br><br>🔴 <strong>Mode 2 (opposite directions):</strong> Band stretches → swing faster ω₂>ω₀<br><br>⚡ <strong>Beats:</strong> Displace only one → energy flows from A to B and back. Complete stops = beats!',formula:`In-phase → slower (ω₁)\nOut-of-phase → faster (ω₂)\nBeats = energy bouncing between pendulums\nTime between standstills = T_beat/2`}},
 steps:[{t:'Setup Two Pendulums',d:'Two ~1m threads on wall hooks, 15cm apart. Verify equal periods before coupling.'},{t:'Add Coupling Spring',d:'Connect at ~50cm from top with spiral spring. This is coupling length l.'},{t:'In-Phase Mode',d:'Displace <b>both equally in same direction</b>. Measure T₁ for 10 oscillations → ω₁.'},{t:'Out-of-Phase Mode',d:'Displace both <b>opposite directions</b>. Measure T₂ → ω₂.'},{t:'Beats Mode',d:'Displace <b>only pendulum A</b>. Time between standstills = T_b/2.'},{t:'Calculate & Verify',d:'ω_beat = 2π/T_b. Verify ω_beat ≈ (ω₂−ω₁)/2.'}],
 graph:{xLabel:'Coupling Length from Top (cm)',yLabel:'Beat Period T_b (s)',xDefault:50,yDefault:4.4,tX:[20,30,40,50,60,70,80],tY:[2.1,2.8,3.6,4.5,5.8,7.4,9.5],note:'T_b increases as spring is moved lower (weaker coupling)'},
 apps:[{icon:'🎹',n:'Piano Tuning',d:'Adjacent piano strings tuned slightly different create rich beating tone.'},{icon:'⚛️',n:'Quantum Systems',d:'Coupled quantum oscillators model molecular bonding and Cooper pairs.'},{icon:'🌉',n:'Bridge Engineering',d:'Tacoma Narrows bridge collapsed from coupled wind oscillations — lesson learned.'},{icon:'📻',n:'Radio Filters',d:'Coupled LC circuits select one frequency from hundreds.'}],
 errors:[{e:'Pendulums have unequal natural frequencies',fix:'Measure both periods. Adjust lengths until equal within 0.5%.'},{e:'Fan wind disturbs beats',fix:'Switch off fans and close windows.'},{e:'Difficulty timing standstills',fix:'Record on video. Review slow motion to find exact standstill frame.'},{e:'Spring mass affects frequency',fix:'Use springs with mass < 5% of pendulum mass.'}]
},
{id:3,col:'#a78bfa',num:'EXP 03',title:'Coupling Strength',sub:'Normal Mode Frequencies vs Coupling Position',desc:'How spring position changes ω₂ — validate linear ω₂² vs l² relationship.',tags:['COUPLING STRENGTH','LINEAR FIT','ω₂² vs l²'],
 theory:{ug:{overview:'For a physical pendulum, ω₂² is <strong>linear in l²</strong> (coupling spring position squared). Plotting ω₂² vs l² gives slope = 2kω₀²/(mgL_CM) and intercept = ω₀².',derivation:'<strong>Physical pendulum:</strong> ω₀ = √(mgL_CM/I)<br><br><strong>Out-of-phase mode:</strong><br>ω₂² = (2kω₀²/mgL_CM)·l² + ω₀²<br><br>Plot ω₂² vs l²:<br>• Slope = 2kω₀²/(mgL_CM) → extract k<br>• Intercept = ω₀² → extract ω₀<br><br><strong>Coupling strength:</strong><br>κ = (ω₂²−ω₁²)/(ω₂²+ω₁²) ∈ [0,1]',formula:`ω₂² = (2kω₀²/mgL_CM)·l² + ω₀²\n\nSlope = 2kω₀²/(mgL_CM)  → find k\nIntercept = ω₀²  → find ω₀\n\nκ = (ω₂²−ω₁²)/(ω₂²+ω₁²)  coupling strength`},
  lay:{overview:'Higher spring = stronger coupling = faster out-of-phase swing. Plot l² vs ω₂² → straight line proves the physics!',derivation:'The spring acts like a bridge between two swings. <strong>Higher attachment = more leverage</strong>.<br><br>Squaring the spring position and plotting against squared frequency gives a perfect line. The slope tells you the spring stiffness indirectly!',formula:`l² vs ω₂²  →  straight line!\nSlope → spring stiffness k\nIntercept → natural frequency ω₀`}},
 steps:[{t:'Measure Spring Constant k',d:'Hang masses. Plot F vs extension. k = slope (N/m).'},{t:'Find Centre of Mass L_CM',d:'Balance pendulum on thin rod to find L_CM from pivot.'},{t:'Setup Sensors',d:'Connect rotary motion sensors to both pendulums.'},{t:'Spring at Top Position',d:'Attach spring at <b>topmost position</b>. Record ω₁ and ω₂.'},{t:'Move Spring Down',d:'Move spring 5–10 cm lower each time. Record ω₁, ω₂ at each position.'},{t:'Plot ω₂² vs l²',d:'Draw best-fit line. Extract slope and intercept. Validate k and ω₀.'}],
 graph:{xLabel:'l² — Coupling Length² (cm²)',yLabel:'ω₂² (rad²/s²)',xDefault:2500,yDefault:6.5,tX:[400,900,1600,2500,3600,4900,6400],tY:[3.9,4.5,5.4,6.6,8.1,9.9,12.1],note:'Linear: ω₂² = slope·l² + ω₀². Intercept = ω₀².'},
 apps:[{icon:'🔬',n:'Molecular Spectroscopy',d:'Normal mode splitting measured by IR/Raman spectroscopy.'},{icon:'💻',n:'MEMS Oscillators',d:'Micro-coupled resonators provide stable timing in smartphones.'},{icon:'🏗️',n:'Seismic Isolation',d:'Building-foundation coupling strength engineered to block earthquakes.'},{icon:'🎹',n:'Piano Timbre',d:'Deliberate slight string detuning creates characteristic warmth.'}],
 errors:[{e:'L_CM measurement inaccurate',fix:'Use knife-edge balancing. Repeat 5 times and average.'},{e:'Spring mass ignored',fix:'Use springs with mass < 5% of pendulum mass.'},{e:'Sensor thread slips',fix:'Create notch or use tape on pulley.'},{e:'Spring shifts during oscillation',fix:'Use locking clamp, not just a hook.'}]
},
{id:4,col:'#f87171',num:'EXP 04',title:'Damped Oscillator',sub:'Exponential Amplitude Decay',desc:'Spring-mass in different media — compare damping factor γ from ln(Aᵢ/A₁) vs time slopes.',tags:['DAMPING','EXPONENTIAL DECAY','VISCOSITY'],
 theory:{ug:{overview:'Resistive force −bẋ causes exponential amplitude decay. The regime (under/critical/over-damped) depends on γ vs ω₀.',derivation:'<strong>EOM:</strong> mẍ + bẋ + kx = 0<br><br>Solution (underdamped):<br>x(t) = A₀·e^(−γt)·cos(ω_d·t+φ)<br>γ = b/2m, ω_d = √(ω₀²−γ²)<br><br><strong>Extract γ:</strong><br>At peaks: Aₙ = A₀·e^(−γtₙ)<br>ln(Aₙ/A₁) = −γ(tₙ−t₁)<br>Slope of ln plot = −γ',formula:`x(t) = A₀·e^(−γt)·cos(ω_d·t+φ)\nγ = b/2m\nω_d = √(ω₀²−γ²)  < ω₀\n\nPlot ln(Aᵢ/A₁) vs t → slope = −γ\nQ = ω₀/(2γ)`},
  lay:{overview:'Ball bouncing in honey vs water vs air — honey damps fastest. Exponential decay on a log graph = straight line.',derivation:'Each cycle the amplitude shrinks by the <em>same percentage</em> → exponential decay.<br><br>Log graph converts this to a straight line. Steeper = more viscous!',formula:`ln(Aᵢ/A₁) vs time → straight line\nSlope = −γ (damping factor)\nSteeper line = thicker fluid`}},
 steps:[{t:'Find Spring Constants',d:'Hang masses on springs individually and combined. k = mg/x.'},{t:'Build Apparatus',d:'Springs on beam → Teflon strip → thread over rotary sensor.'},{t:'Air Baseline',d:'Oscillate in air. Record peaks A₁,A₂... at times t₁,t₂...'},{t:'Immerse in Water',d:'Lower mass into water. <b>Ensure full immersion throughout motion</b>.'},{t:'Repeat for Oils',d:'Oil 1 then Oil 2. Separate table for each medium.'},{t:'Plot ln(Aᵢ/A₁) vs t',d:'All media on one graph. Slope = −γ. Fill Table IV.'}],
 graph:{xLabel:'Time t (s)',yLabel:'ln(Aᵢ / A₁)',xDefault:6,yDefault:-0.30,tX:[0,2,4,6,8,10,12,14],tY:[0,-0.14,-0.28,-0.42,-0.56,-0.70,-0.84,-0.98],note:'Slope = −γ. Air: γ≈0.05, Water: γ≈0.18, Oil: γ≈0.4+'},
 apps:[{icon:'🚗',n:'Car Shock Absorbers',d:'Dashpot dampers engineered near critical damping for smooth ride.'},{icon:'🏢',n:'Taipei 101 Damper',d:'660-tonne pendulum absorbs typhoon energy through fluid damping.'},{icon:'🎙️',n:'Microphone Diaphragm',d:'Critically damped diaphragms capture transients without ringing.'},{icon:'🔬',n:'AFM Cantilever',d:'Precisely damped cantilevers map individual atoms.'}],
 errors:[{e:'Mass hits beaker bottom',fix:'Use smaller amplitude or deeper beaker. Check clearance first.'},{e:'Motion leaves vertical plane',fix:'Springs, thread, masses must be co-planar.'},{e:'Temperature changes viscosity',fix:'Finish readings in < 5 minutes. Note room temp.'},{e:'Sensor thread friction',fix:'Use light thread. Lubricate pulley if needed.'}]
},
{id:5,col:'#34d399',num:'EXP 05',title:'Forced Oscillator',sub:'Resonance Curve & Q-Factor',desc:'Drive a spring-mass system and map amplitude vs frequency — resonance in Air, Water, Oil.',tags:['RESONANCE','DRIVEN SHM','Q-FACTOR'],
 theory:{ug:{overview:'Steady-state driven oscillator: amplitude A(ω) peaks at resonance ω_res ≈ ω₀. Q-factor measures sharpness.',derivation:'<strong>Driven EOM:</strong><br>mẍ + bẋ + kx = F₀cos(ωt)<br><br><strong>Steady-state amplitude:</strong><br>A(ω) = F₀/m / √[(ω₀²−ω²)²+γ²ω²]<br><br><strong>Resonance:</strong> ω_res = √(ω₀²−γ²/2)<br>Phase at ω₀: φ = 90° always!<br><br><strong>Q-factor:</strong> Q = ω₀/γ = ω_res/Δω',formula:`A(ω) = (F₀/m) / √[(ω₀²−ω²)²+γ²ω²]\nω_res ≈ √(ω₀²−γ²/2)\nA_max = F₀·Q/k\nQ = ω₀/γ  (Quality factor)\nPhase = 90° at resonance ALWAYS`},
  lay:{overview:'Push a swing at its natural rhythm → maximum height. That\'s resonance! Viscous media flatten and widen the peak.',derivation:'Below ω₀: small response<br>At ω₀: MAXIMUM (resonance!)<br>Above ω₀: small again<br><br>Air → tall sharp peak<br>Water → shorter wider peak<br>Oil → broad flat hump',formula:`At ω₀ → maximum amplitude!\nHigh Q = sharp tall peak\nLow Q = broad flat peak\nPhase = 90° at resonance`}},
 steps:[{t:'Measure Spring Constant k',d:'Hang masses. Plot F vs x. k = slope.'},{t:'Calculate Natural Frequency',d:'ω₀ = √(k/m). Cross-check with free oscillation period.'},{t:'Start at 0.2 Hz',d:'Switch ON. <b>Wait 10+ cycles for steady-state</b>. Read amplitude = total displacement / 2.'},{t:'Sweep in 0.2 Hz Steps',d:'Cover 0.2 Hz to 2×ω₀. Near peak use 0.05 Hz steps.'},{t:'Find Resonance Peak',d:'Frequency of maximum amplitude = ω_res.'},{t:'Repeat in Each Medium',d:'Sweep for water and Oil. Plot all three curves together.'}],
 graph:{xLabel:'Driving Frequency (Hz)',yLabel:'Amplitude A (cm)',xDefault:1.0,yDefault:8.2,tX:[0.2,0.4,0.6,0.8,0.9,1.0,1.1,1.2,1.4,1.6,1.8,2.0],tY:[0.4,0.7,1.2,2.2,4.1,8.8,4.3,2.4,1.3,0.9,0.6,0.5],note:'Peak at ω₀≈1 Hz. Half-power bandwidth Δω gives Q = ω₀/Δω.'},
 apps:[{icon:'🎸',n:'Acoustic Guitar Body',d:'Hollow body resonates at frequencies to amplify string vibration.'},{icon:'📡',n:'MRI Machines',d:'Proton nuclei at Larmor frequency absorb RF energy for imaging.'},{icon:'🏗️',n:'Vibration Isolation',d:'Machines mounted far from resonance prevent building shake.'},{icon:'📻',n:'Radio Tuning',d:'LC resonance selects exact station frequency.'}],
 errors:[{e:'Parallax error reading amplitude',fix:'Eye perpendicular to scale. Use bottom edge of disc as reference.'},{e:'Reading before steady-state',fix:'Count 10+ oscillation cycles after each frequency change.'},{e:'Thread out of plane',fix:'View from above. Thread must run in single vertical plane.'},{e:'Frequency drifts',fix:'Wait 30s after setting frequency before reading.'}]
},
{id:6,col:'#60a5fa',num:'EXP 06',title:"Standing Waves (Melde's)",sub:'Tuning Fork Frequency via Loop Analysis',desc:"Vibrating string forms resonant loops — find tuning fork frequency from Melde's law.",tags:["MELDE'S LAW","STANDING WAVES","STRING RESONANCE"],
 theory:{ug:{overview:'Standing waves form through superposition of incident and reflected waves. At resonance the string divides into n half-wavelength loops.',derivation:'<strong>Wave speed:</strong> v = √(T/μ)<br><br><strong>Resonance:</strong> L = n·λ/2 → f = (n/2L)·√(T/μ)<br><br><strong>For one loop (n=1):</strong><br>Transverse: η = (1/2l)·√(T/μ)<br>Longitudinal: η = (1/l)·√(T/μ)<br><br><strong>Standing wave:</strong><br>y(x,t) = 2A·sin(kx)·cos(ωt)',formula:`v = √(T/μ)\nT = (M+m_pan)·g\n\nTransverse:  η = (1/2l)·√(T/μ)\nLongitudinal: η = (1/l)·√(T/μ)\n\nPlot 1/l vs √T → slope = 2η/√μ`},
  lay:{overview:'Guitar strings form standing wave loops at the right conditions. Melde\'s apparatus shows this clearly with visible loops.',derivation:'Wave goes from fork to pulley and reflects back. At resonance they add up to form stable loops!<br><br>More tension → faster wave → longer loops for same frequency.',formula:`η = (1/2l) × √(T/μ)\nMore tension → longer loops\nPlot √T vs 1/l → straight line!`}},
 steps:[{t:'Measure μ',d:'Measure string mass m and length L. μ = m/L kg/m.'},{t:'Transverse Setup',d:'String tied to fork, over pulley, pan hanging. Fork parallel to string.'},{t:'Power Fork',d:'Adjust screw until fork vibrates steadily. Voltage < 6V!'},{t:'Find n=1 Loop',d:'Slide fork until one sharp loop with still nodes appears.'},{t:'Vary n',d:'Get 2, 3, 4 loops by adjusting position. Measure loop length each time.'},{t:'Calculate η',d:'η = (1/2l)·√(T/μ). Average all values.'},{t:'Longitudinal Setup',d:'Rotate fork 90°. Use η = (1/l)·√(T/μ). Compare results.'}],
 graph:{xLabel:'√T (N^0.5)',yLabel:'1/l (m⁻¹)',xDefault:1.22,yDefault:44,tX:[0.5,0.7,1.0,1.22,1.41,1.58,1.73,1.87],tY:[18,25,36,44,51,57,62,67],note:'Slope = 2η/√μ. Extract fork frequency η from slope.'},
 apps:[{icon:'🎸',n:'Guitar & Violin',d:'Fret positions follow Melde\'s law to produce the musical scale.'},{icon:'🔊',n:'Speaker Cone Design',d:'Speaker resonance engineered outside audible range.'},{icon:'🛰️',n:'Half-Wave Dipole Antenna',d:'Antenna length = λ/2 at target frequency.'},{icon:'🏥',n:'Lithotripsy',d:'Focused standing waves shatter kidney stones.'}],
 errors:[{e:'Fork overtightened — sparks',fix:'Back off screw. Gentle advance just until steady vibration.'},{e:'String not horizontal',fix:'Level apparatus. Pulley and fork at same height.'},{e:'Fork overheated',fix:'Switch off between measurements. Allow 30s cooling.'},{e:'Nodes not sharp',fix:'Fine-tune very slowly. Good node should be motionless.'}]
},
{id:7,col:'#f0abfc',num:'EXP 07',title:'Resonance in Vibrating String',sub:'Sonometer — Wave Speed Measurement',desc:'Sonometer with tuning forks measures fundamental resonance lengths → wave speed.',tags:['SONOMETER','WAVE SPEED','FUNDAMENTAL MODE'],
 theory:{ug:{overview:'The sonometer verifies V = √(T/μ) by finding resonance lengths for different tuning forks. Plotting ν vs 1/L gives slope = V/2.',derivation:'<strong>V = √(T/μ)</strong><br><br>Fundamental (n=1): ν = V/(2L)<br>Plot ν vs 1/L → slope = V/2<br><br><strong>Lever tension:</strong> T = Mg·l₁/l₂<br><br><strong>End correction:</strong> Use λ = 2(L₂−L₁) to cancel.',formula:`V = √(T/μ)\nν = V/(2L)\n\nPlot ν vs 1/L → slope = V/2\nV = 2×slope\n\nT = Mg·l₁/l₂  (lever)\nEnd correction: λ = 2(L₂−L₁)`},
  lay:{overview:'Sonometer is a precise one-string guitar. Shorter + tighter = faster wave = higher note.',derivation:'Strike fork → place on sonometer → adjust bridge until paper rider flies off = resonance!<br><br>Test all 8 forks → plot → find wave speed.',formula:`Shorter string → higher frequency\nTighter string → higher frequency\nPlot freq vs 1/length → slope = speed/2`}},
 steps:[{t:'Record String μ',d:'μ = m_total/L_total kg/m from apparatus label.'},{t:'Set Tension',d:'Hang 1kg at lever position 3. Adjust knob until lever is <b>perfectly horizontal</b>.'},{t:'Calculate V',d:'V = √(T/μ). This is your reference.'},{t:'Place Bridges & Rider',d:'Set bridges ~15cm apart. Paper rider at exact midpoint.'},{t:'Strike Fork',d:'Rubber hammer. Place on sonometer body. Watch for rider jump.'},{t:'Find Resonance Length',d:'Move bridge until rider <b>jumps off vigorously</b>. Confirm with oscilloscope. Record L.'},{t:'Verify & Repeat',d:'Halve separation to confirm n=1. Repeat all 8 forks. Plot ν vs 1/L.'}],
 graph:{xLabel:'1/L (m⁻¹)',yLabel:'Frequency ν (Hz)',xDefault:6.0,yDefault:336,tX:[3,4,5,6,7,8,9,10],tY:[168,224,280,336,392,448,504,560],note:'Slope = V/2 ≈ 56 m/s → V ≈ 112 m/s. Compare with √(T/μ).'},
 apps:[{icon:'🎸',n:'Guitar Fret Positions',d:'Each fret shortens string by precise ratio for 12-tone scale.'},{icon:'🏥',n:'Ultrasound Imaging',d:'Piezoelectric crystal resonance creates MHz imaging pulses.'},{icon:'🌊',n:'SONAR Detection',d:'Transducer resonance enables centimeter precision ranging.'},{icon:'🔧',n:'Non-Destructive Testing',d:'Resonance shift detects cracks without cutting the part.'}],
 errors:[{e:'String has kinks',fix:'Pre-stretch with heavy mass. Check visually for straightness.'},{e:'End correction ignored',fix:'Use λ=2(L₂−L₁) — cancels end correction automatically.'},{e:'Rider not at center',fix:'Use ruler to place rider at exact midpoint between bridges.'},{e:'Mass exceeds 5 kg',fix:'Never exceed 5 kg. Increase in 500g steps.'}]
},
{id:8,col:'#fb923c',num:'EXP 08',title:'Speed of Sound',sub:'Resonance Column Method',desc:'Speed of sound in air via fundamental and second resonance lengths in a water-column tube.',tags:['SOUND','RESONANCE COLUMN','AIR COLUMN'],
 theory:{ug:{overview:'Closed-end tube resonates at L = nλ/4 (odd n only). Two resonances cancel end correction: λ = 2(l₁−l₀).',derivation:'<strong>Resonance:</strong> L = nλ/4, n=1,3,5...<br><br><strong>End correction:</strong> l₀+e = λ/4, l₁+e = 3λ/4<br>Subtract: l₁−l₀ = λ/2 → λ = 2(l₁−l₀)<br>v = νλ<br><br><strong>Temperature:</strong> v = 331.5+0.61T°C',formula:`L = nλ/4  (n=1,3,5...)\nλ = 2(l₁−l₀)  ← cancels end correction\nv = ν·λ\n\nGraph: L₀ vs 1/(4ν) → slope = v\n\nv ≈ 331.5 + 0.61·T°C  m/s`},
  lay:{overview:'Air column in tube resonates like blowing across a bottle. Two resonant lengths give wavelength → speed.',derivation:'Lower water → longer air column → suddenly loud sound = resonance!<br><br>Two booms separated by λ/2 → measure λ → v = f×λ',formula:`l₀ ≈ λ/4  (first resonance)\nl₁ ≈ 3λ/4 (second resonance)\nλ = 2(l₁−l₀)\nv = frequency × wavelength`}},
 steps:[{t:'Setup Reservoir',d:'Set initial air column to 5 cm by adjusting reservoir height.'},{t:'Select Highest Frequency Fork',d:'Higher frequency → shorter resonance length → found sooner.'},{t:'Strike Fork Correctly',d:'Hold <b>horizontally above tube, U-part perpendicular to opening</b>. Never touch tube walls.'},{t:'Lower Water Slowly',d:'Loosen pinch cork. Reservoir at 40 cm. Water drops gradually.'},{t:'Find l₀ (Fundamental)',d:'Listen for loudest sound. Mark as l₀.'},{t:'Find l₁ (Second Resonance)',d:'Continue lowering. Find next loud point l₁ ≈ 3×l₀.'},{t:'Calculate & Plot',d:'λ = 2(l₁−l₀). v = νλ. Plot L₀ vs 1/(4ν). Slope = v.'}],
 graph:{xLabel:'1/(4ν) × 10³ (s/m)',yLabel:'Resonance Length L₀ (cm)',xDefault:1.25,yDefault:43,tX:[0.625,0.833,1.04,1.25,1.56,1.79,2.08,2.44],tY:[21.5,28.6,35.8,43.0,53.8,61.5,71.5,84.0],note:'Slope = v ≈ 345 m/s at ~28°C. Theory: 331.5+0.61×28 = 348.6 m/s'},
 apps:[{icon:'🎵',n:'Flutes & Organ Pipes',d:'Every wind instrument is a resonance column.'},{icon:'🌡️',n:'Acoustic Thermometry',d:'Sound speed measures temperature — used in weather balloons.'},{icon:'🦇',n:'Bat Echolocation',d:'Bats time ultrasonic echoes for centimeter precision.'},{icon:'🏠',n:'Room Acoustics',d:'Studios designed to avoid room standing wave modes.'}],
 errors:[{e:'Resonance heard over a range',fix:'Use range midpoint. Range width = your uncertainty.'},{e:'Ambient noise masks resonance',fix:'Perform at night. Use earphones near tube opening.'},{e:'Fork touching tube',fix:'Hold 1–2 cm above opening. Use foam holder.'},{e:'Water drops too fast',fix:'Very small pinch cork opening. Practice with water first.'}]
}
];

// ══════════════════════════════════════════════════════
// STATE
// ══════════════════════════════════════════════════════
let RAF=null,T=0,SPEED=1.0,P={},curExp=null,level='ug';
let charts=[],dataTables=[],curStep=0,stepInterval=null,autoOn=false;
// dataTables: [{id, label, rows:[{x,y}], color, visible}]

// ══════════════════════════════════════════════════════
// SIMULATIONS
// ══════════════════════════════════════════════════════
function rc(c){const r=c.getBoundingClientRect();if(c.width!==Math.round(r.width)||c.height!==Math.round(r.height)){c.width=Math.round(r.width);c.height=Math.round(r.height);}}

const SIM={
// EXP 1 — LISSAJOUS FIXED: bob follows parametric equations exactly, background circle removed
1(ctx,t,p){
  const W=ctx.canvas.width,H=ctx.canvas.height,cx=W/2,cy=H/2;
  ctx.fillStyle='#040710';ctx.fillRect(0,0,W,H);
  const ph=p.phase??Math.PI/2;
  const A=p.amplX??1, B=p.amplY??1;
  const R=Math.min(W,H)*0.36;
  // Grid
  ctx.strokeStyle='rgba(0,212,200,0.07)';ctx.lineWidth=1;
  for(let i=-3;i<=3;i++){
    if(i===0)continue;
    ctx.beginPath();ctx.moveTo(cx+i*R/3,cy-R-20);ctx.lineTo(cx+i*R/3,cy+R+20);ctx.stroke();
    ctx.beginPath();ctx.moveTo(cx-R-20,cy+i*R/3);ctx.lineTo(cx+R+20,cy+i*R/3);ctx.stroke();
  }
  // Axes
  ctx.strokeStyle='rgba(0,212,200,0.22)';ctx.lineWidth=1.5;
  ctx.beginPath();ctx.moveTo(cx-R-18,cy);ctx.lineTo(cx+R+18,cy);ctx.stroke();
  ctx.beginPath();ctx.moveTo(cx,cy-R-18);ctx.lineTo(cx,cy+R+18);ctx.stroke();
  // Axis labels
  ctx.fillStyle='rgba(0,212,200,0.4)';ctx.font='11px Space Mono';
  ctx.fillText('x',cx+R+6,cy-5);ctx.fillText('y',cx+5,cy-R-8);
  // Trail
  ctx.strokeStyle=`rgba(0,212,200,0.4)`;ctx.lineWidth=2;ctx.beginPath();
  for(let i=0;i<=500;i++){
    const a=i/500*2*Math.PI;
    const x=cx+R*A*Math.cos(a);
    const y=cy+R*B*Math.cos(a+ph);
    i?ctx.lineTo(x,y):ctx.moveTo(x,y);
  }ctx.stroke();
  // Phase-angle indicator arc (small, bottom right corner only)
  const arcCx=W-44,arcCy=H-44,arcR=22;
  ctx.strokeStyle='rgba(0,212,200,0.25)';ctx.lineWidth=1;
  ctx.beginPath();ctx.arc(arcCx,arcCy,arcR,0,Math.PI*2);ctx.stroke();
  // Current angle indicator
  const currentAngle=t*0.006;
  ctx.strokeStyle='rgba(251,191,36,0.6)';ctx.lineWidth=1.5;
  ctx.beginPath();ctx.moveTo(arcCx,arcCy);
  ctx.lineTo(arcCx+arcR*Math.cos(currentAngle),arcCy+arcR*Math.sin(currentAngle));
  ctx.stroke();
  // Bob position: x follows cos(t), y follows cos(t+ph)
  const bx=cx+R*A*Math.cos(t*0.006);
  const by=cy+R*B*Math.cos(t*0.006+ph);
  // Projection lines (dashed)
  ctx.setLineDash([3,4]);ctx.strokeStyle='rgba(251,191,36,0.28)';ctx.lineWidth=1;
  ctx.beginPath();ctx.moveTo(bx,cy);ctx.lineTo(bx,by);ctx.stroke();
  ctx.beginPath();ctx.moveTo(cx,by);ctx.lineTo(bx,by);ctx.stroke();
  ctx.setLineDash([]);
  // Bob glow
  ctx.fillStyle='rgba(0,212,200,0.12)';ctx.beginPath();ctx.arc(bx,by,20,0,Math.PI*2);ctx.fill();
  ctx.fillStyle='rgba(0,212,200,0.35)';ctx.beginPath();ctx.arc(bx,by,10,0,Math.PI*2);ctx.fill();
  ctx.fillStyle='#00d4c8';ctx.beginPath();ctx.arc(bx,by,5,0,Math.PI*2);ctx.fill();
  // Info
  const deg=Math.round(ph/Math.PI*180);
  const shapes={0:'LINE',180:'LINE',45:'ELLIPSE',90:A===B?'CIRCLE':'ELLIPSE',135:'ELLIPSE'};
  const shape=shapes[deg]||(deg===90?'ELLIPSE':'ELLIPSE');
  ctx.fillStyle='rgba(0,212,200,0.65)';ctx.font='11px Space Mono';
  ctx.fillText(`Δφ = ${deg}°`,10,20);
  ctx.fillStyle='rgba(251,191,36,0.7)';ctx.font='11px Space Mono';
  ctx.fillText(`Shape: ${shape}`,10,36);
},

// EXP 2 — Coupled Pendulums
2(ctx,t,p){
  const W=ctx.canvas.width,H=ctx.canvas.height;
  ctx.fillStyle='#040710';ctx.fillRect(0,0,W,H);
  const mode=p.mode??'beats';
  const Lrod=H*0.60,top=30,cx1=W*0.3,cx2=W*0.7;
  let a1,a2;
  const w1=0.040,w2=0.053;
  if(mode==='in'){a1=0.28*Math.cos(w1*t);a2=0.28*Math.cos(w1*t);}
  else if(mode==='out'){a1=0.28*Math.cos(w2*t);a2=-0.28*Math.cos(w2*t);}
  else{a1=0.28*Math.cos(w1*t)*Math.cos((w2-w1)/2*t);a2=0.28*Math.sin(w2*t)*Math.sin((w2-w1)/2*t);}
  const x1=cx1+Lrod*Math.sin(a1),y1=top+Lrod*Math.cos(a1);
  const x2=cx2+Lrod*Math.sin(a2),y2=top+Lrod*Math.cos(a2);
  // Ceiling
  ctx.fillStyle='rgba(255,255,255,0.1)';ctx.fillRect(W*0.08,top-8,W*0.84,8);
  ctx.strokeStyle='rgba(255,255,255,0.2)';ctx.lineWidth=2;
  ctx.beginPath();ctx.moveTo(W*0.08,top);ctx.lineTo(W*0.92,top);ctx.stroke();
  // Coupling spring
  const spFrac=0.55;
  const lsx1=cx1+Lrod*spFrac*Math.sin(a1),lsx2=cx2+Lrod*spFrac*Math.sin(a2);
  const spY=top+Lrod*spFrac*Math.cos((a1+a2)/2);
  ctx.strokeStyle='rgba(251,191,36,0.75)';ctx.lineWidth=1.8;ctx.beginPath();
  for(let i=0;i<=22;i++){ctx.lineTo(lsx1+(lsx2-lsx1)*i/22,spY+(i%2?-6:6));}ctx.stroke();
  ctx.fillStyle='rgba(255,255,255,0.35)';
  ctx.beginPath();ctx.arc(cx1,top,4,0,Math.PI*2);ctx.fill();
  ctx.beginPath();ctx.arc(cx2,top,4,0,Math.PI*2);ctx.fill();
  // Rods
  ctx.strokeStyle='rgba(255,255,255,0.5)';ctx.lineWidth=2;
  ctx.beginPath();ctx.moveTo(cx1,top);ctx.lineTo(x1,y1);ctx.stroke();
  ctx.beginPath();ctx.moveTo(cx2,top);ctx.lineTo(x2,y2);ctx.stroke();
  // Energy bars
  const eA=Math.min(Math.abs(a1)/0.30,1),eB=Math.min(Math.abs(a2)/0.30,1);
  const bH=55,bW=10,bX=W-28,bY=top+25;
  ctx.fillStyle='rgba(255,255,255,0.07)';ctx.fillRect(bX-bW-16,bY,bW,bH);ctx.fillRect(bX,bY,bW,bH);
  ctx.fillStyle=eA>0.1?'#00d4c8':'#00d4c822';ctx.fillRect(bX-bW-16,bY+bH*(1-eA),bW,bH*eA);
  ctx.fillStyle=eB>0.1?'#fbbf24':'#fbbf2422';ctx.fillRect(bX,bY+bH*(1-eB),bW,bH*eB);
  ctx.fillStyle='rgba(200,200,200,0.5)';ctx.font='9px Space Mono';
  ctx.fillText('A',bX-bW-16,bY+bH+13);ctx.fillText('B',bX+1,bY+bH+13);
  // Bobs
  [[x1,y1,'#00d4c8'],[x2,y2,'#fbbf24']].forEach(([bx,by,c])=>{
    ctx.fillStyle=c+'22';ctx.beginPath();ctx.arc(bx,by,20,0,Math.PI*2);ctx.fill();
    ctx.fillStyle=c;ctx.beginPath();ctx.arc(bx,by,11,0,Math.PI*2);ctx.fill();
  });
  // Label
  ctx.fillStyle='rgba(0,212,200,0.6)';ctx.font='11px Space Mono';
  ctx.fillText(mode==='in'?'IN-PHASE MODE':mode==='out'?'OUT-OF-PHASE MODE':'BEATS MODE — energy transfer',10,20);
},

// EXP 3 — COUPLING STRENGTH: spring moves visually along rod
3(ctx,t,p){
  const W=ctx.canvas.width,H=ctx.canvas.height;
  ctx.fillStyle='#040710';ctx.fillRect(0,0,W,H);
  const Lrod=H*0.60,top=30,cx1=W*0.3,cx2=W*0.7;
  const lFrac=p.lFrac??0.55;
  // beats motion
  const w1=0.040,w2=0.040+lFrac*0.018;
  const a1=0.25*Math.cos(w1*t)*Math.cos((w2-w1)/2*t);
  const a2=0.25*Math.sin(w2*t)*Math.sin((w2-w1)/2*t);
  const x1=cx1+Lrod*Math.sin(a1),y1=top+Lrod*Math.cos(a1);
  const x2=cx2+Lrod*Math.sin(a2),y2=top+Lrod*Math.cos(a2);
  // Ceiling
  ctx.fillStyle='rgba(255,255,255,0.1)';ctx.fillRect(W*0.08,top-8,W*0.84,8);
  ctx.strokeStyle='rgba(255,255,255,0.18)';ctx.lineWidth=2;
  ctx.beginPath();ctx.moveTo(W*0.08,top);ctx.lineTo(W*0.92,top);ctx.stroke();
  // Rods with tick marks at 20%,40%,60%,80%
  ctx.strokeStyle='rgba(255,255,255,0.45)';ctx.lineWidth=2;
  ctx.beginPath();ctx.moveTo(cx1,top);ctx.lineTo(x1,y1);ctx.stroke();
  ctx.beginPath();ctx.moveTo(cx2,top);ctx.lineTo(x2,y2);ctx.stroke();
  // Tick marks on rod 1
  [0.2,0.4,0.6,0.8].forEach(f=>{
    const tx=cx1+Lrod*f*Math.sin(a1),ty=top+Lrod*f*Math.cos(a1);
    const nx=Math.cos(a1)*5,ny=-Math.sin(a1)*5;
    ctx.strokeStyle='rgba(167,139,250,0.4)';ctx.lineWidth=1.2;
    ctx.beginPath();ctx.moveTo(tx-nx,ty-ny);ctx.lineTo(tx+nx,ty+ny);ctx.stroke();
  });
  // Spring attachment point on BOTH rods (moves with lFrac)
  const spX1=cx1+Lrod*lFrac*Math.sin(a1),spY1=top+Lrod*lFrac*Math.cos(a1);
  const spX2=cx2+Lrod*lFrac*Math.sin(a2),spY2=top+Lrod*lFrac*Math.cos(a2);
  // Spring coil between attachment points
  ctx.strokeStyle='rgba(251,191,36,0.8)';ctx.lineWidth=2;ctx.beginPath();
  const spSteps=20;
  for(let i=0;i<=spSteps;i++){
    const px=spX1+(spX2-spX1)*i/spSteps;
    const py=spY1+(spY2-spY1)*i/spSteps+(i%2?-7:7);
    i?ctx.lineTo(px,py):ctx.moveTo(px,py);
  }ctx.stroke();
  // Spring attachment circles
  ctx.fillStyle='#fbbf24';ctx.beginPath();ctx.arc(spX1,spY1,5,0,Math.PI*2);ctx.fill();
  ctx.fillStyle='#fbbf24';ctx.beginPath();ctx.arc(spX2,spY2,5,0,Math.PI*2);ctx.fill();
  // Bobs
  [[x1,y1,'#a78bfa'],[x2,y2,'#a78bfa']].forEach(([bx,by,c])=>{
    ctx.fillStyle=c+'22';ctx.beginPath();ctx.arc(bx,by,20,0,Math.PI*2);ctx.fill();
    ctx.fillStyle=c;ctx.beginPath();ctx.arc(bx,by,11,0,Math.PI*2);ctx.fill();
  });
  const kappa=Math.min((lFrac*lFrac*1.4),0.99);
  ctx.fillStyle='rgba(167,139,250,0.7)';ctx.font='11px Space Mono';
  ctx.fillText(`l/L = ${lFrac.toFixed(2)}  |  κ ≈ ${kappa.toFixed(2)}`,10,20);
  ctx.fillStyle='rgba(251,191,36,0.6)';ctx.font='10px Space Mono';
  ctx.fillText('◆ = spring attachment (drag via buttons)',10,H-12);
},

// EXP 4 — DAMPED: always reset on medium change (handled in button onclick)
4(ctx,t,p){
  const W=ctx.canvas.width,H=ctx.canvas.height,cy=H/2;
  ctx.fillStyle='#040710';ctx.fillRect(0,0,W,H);
  const gamma=p.gamma??0.018;
  const w0=2*Math.PI*0.10;
  // Grid lines
  ctx.strokeStyle='rgba(255,255,255,0.04)';ctx.lineWidth=1;
  for(let i=1;i<8;i++){ctx.beginPath();ctx.moveTo(i*W/8,0);ctx.lineTo(i*W/8,H);ctx.stroke();}
  ctx.strokeStyle='rgba(255,255,255,0.08)';ctx.lineWidth=1;
  ctx.beginPath();ctx.moveTo(0,cy);ctx.lineTo(W,cy);ctx.stroke();
  // Envelope
  ctx.setLineDash([4,5]);ctx.strokeStyle='rgba(248,113,113,0.4)';ctx.lineWidth=1.5;
  ctx.beginPath();for(let x=0;x<W;x++)ctx.lineTo(x,cy-H*0.42*Math.exp(-gamma*(x+t*0.32)));ctx.stroke();
  ctx.beginPath();for(let x=0;x<W;x++)ctx.lineTo(x,cy+H*0.42*Math.exp(-gamma*(x+t*0.32)));ctx.stroke();
  ctx.setLineDash([]);
  // Wave
  ctx.strokeStyle='#f87171';ctx.lineWidth=2.5;ctx.beginPath();
  for(let x=0;x<W;x++){
    const env=H*0.42*Math.exp(-gamma*(x+t*0.32));
    const y=cy+env*Math.cos((x+t*3.0)*0.10);
    x?ctx.lineTo(x,y):ctx.moveTo(x,y);
  }ctx.stroke();
  // Moving dot
  const xd=(t*1.6)%W;
  const ed=H*0.42*Math.exp(-gamma*(xd+t*0.32));
  const yd=cy+ed*Math.cos((xd+t*3.0)*0.10);
  ctx.fillStyle='rgba(248,113,113,0.18)';ctx.beginPath();ctx.arc(xd,yd,15,0,Math.PI*2);ctx.fill();
  ctx.fillStyle='#f87171';ctx.beginPath();ctx.arc(xd,yd,5,0,Math.PI*2);ctx.fill();
  const medName=p.medName??'Water';
  ctx.fillStyle='rgba(248,113,113,0.7)';ctx.font='11px Space Mono';
  ctx.fillText(`Medium: ${medName}  |  γ = ${gamma.toFixed(3)} s⁻¹`,10,20);
  ctx.fillStyle='rgba(255,255,255,0.3)';ctx.font='10px Space Mono';
  ctx.fillText(`Q ≈ ${(w0/(2*gamma)).toFixed(1)}  |  Envelope: A₀·e^(−γt)`,10,36);
},

// EXP 5 — FORCED: 3 media only (Air, Water, Oil) + peak marker for Air
5(ctx,t,p){
  const W=ctx.canvas.width,H=ctx.canvas.height;
  ctx.fillStyle='#040710';ctx.fillRect(0,0,W,H);
  const w0=1.0;
  const cy=H*0.65,axL=40,axR=W-15,axT=15;
  // Axes
  ctx.strokeStyle='rgba(255,255,255,0.14)';ctx.lineWidth=1.5;
  ctx.beginPath();ctx.moveTo(axL,axT);ctx.lineTo(axL,cy+5);ctx.stroke();
  ctx.beginPath();ctx.moveTo(axL-5,cy);ctx.lineTo(axR,cy);ctx.stroke();
  ctx.fillStyle='rgba(255,255,255,0.4)';ctx.font='10px Space Mono';
  ctx.fillText('A',axL-18,axT+10);ctx.fillText('ω',axR-8,cy+18);
  // x-axis tick at ω₀
  const w0x=axL+(w0/2.5)*(axR-axL);
  ctx.strokeStyle='rgba(255,255,255,0.2)';ctx.lineWidth=1;ctx.setLineDash([3,3]);
  ctx.beginPath();ctx.moveTo(w0x,axT);ctx.lineTo(w0x,cy);ctx.stroke();ctx.setLineDash([]);
  ctx.fillStyle='rgba(255,255,255,0.35)';ctx.font='10px Space Mono';ctx.fillText('ω₀',w0x-8,cy+16);
  // Three media only
  const media=[
    {g:0.10,col:'#00d4c8',name:'Air',lw:2.8},
    {g:0.45,col:'#60a5fa',name:'Water',lw:2.2},
    {g:1.2, col:'#fbbf24',name:'Oil', lw:2.2},
  ];
  const maxScale=H*0.50;
  media.forEach(m=>{
    ctx.strokeStyle=m.col;ctx.lineWidth=m.lw;ctx.beginPath();
    let peakX=axL,peakY=cy;
    for(let px=axL+1;px<axR;px++){
      const w=(px-axL)/(axR-axL)*2.5+0.05;
      const A=Math.min(1/Math.sqrt((w0*w0-w*w)**2+w*w*m.g*m.g)*18,maxScale);
      const sy=cy-A;
      px===axL+1?ctx.moveTo(px,sy):ctx.lineTo(px,sy);
      if(A>cy-peakY){peakX=px;peakY=sy;}
    }ctx.stroke();
    // Peak marker for all, big mountain arrow for Air
    if(m.name==='Air'){
      ctx.fillStyle=m.col+'22';
      // Mountain shape under peak
      ctx.beginPath();ctx.moveTo(w0x-28,cy);ctx.lineTo(w0x,peakY-4);ctx.lineTo(w0x+28,cy);ctx.closePath();ctx.fill();
      ctx.strokeStyle=m.col;ctx.lineWidth=1.2;ctx.setLineDash([2,3]);
      ctx.beginPath();ctx.moveTo(w0x,peakY-4);ctx.lineTo(w0x,cy);ctx.stroke();ctx.setLineDash([]);
      // Peak annotation
      ctx.fillStyle=m.col;ctx.font='bold 10px Space Mono';
      ctx.fillText('▲ PEAK',w0x+4,peakY+2);
    }
    // Legend dot
    const legI=media.indexOf(m);
    ctx.fillStyle=m.col;ctx.beginPath();ctx.arc(W-90,axT+10+legI*16,5,0,Math.PI*2);ctx.fill();
    ctx.fillStyle=m.col;ctx.font='10px Space Mono';ctx.fillText(m.name,W-82,axT+14+legI*16);
  });
  // Animated scan dot on air curve (γ=0.10)
  const scanX=((t*1.3)%(axR-axL))+axL;
  const scanW=(scanX-axL)/(axR-axL)*2.5+0.05;
  const scanA=Math.min(1/Math.sqrt((w0*w0-scanW*scanW)**2+scanW*scanW*0.10*0.10)*18,maxScale);
  ctx.fillStyle='rgba(251,191,36,0.7)';ctx.beginPath();ctx.arc(scanX,cy-scanA,5,0,Math.PI*2);ctx.fill();
  ctx.fillStyle='rgba(255,255,255,0.4)';ctx.font='10px Space Mono';
  ctx.fillText('Scanning →',10,H-10);
},

// EXP 6 — STANDING WAVES: user-controlled number of loops
6(ctx,t,p){
  const W=ctx.canvas.width,H=ctx.canvas.height,cy=H/2;
  ctx.fillStyle='#040710';ctx.fillRect(0,0,W,H);
  const n=p.loops??1;
  const margin=35,uw=W-2*margin;
  // Supports
  ctx.fillStyle='rgba(255,255,255,0.14)';ctx.fillRect(margin-8,cy-35,12,70);ctx.fillRect(W-margin-4,cy-35,12,70);
  ctx.strokeStyle='rgba(255,255,255,0.08)';ctx.lineWidth=1;
  ctx.beginPath();ctx.moveTo(margin,cy);ctx.lineTo(W-margin,cy);ctx.stroke();
  // Tuning fork symbol on left
  ctx.strokeStyle='rgba(251,191,36,0.5)';ctx.lineWidth=2;
  ctx.beginPath();ctx.moveTo(margin-14,cy-20);ctx.lineTo(margin-14,cy+20);ctx.stroke();
  ctx.beginPath();ctx.arc(margin-14,cy-20,6,0,Math.PI);ctx.stroke();
  // Loop count label
  ctx.fillStyle='rgba(96,165,250,0.7)';ctx.font='12px Space Mono';
  ctx.fillText(`n = ${n} loop${n>1?'s':''}  |  λ = ${(2*uw/n/uw*100).toFixed(0)}% of string`,10,20);
  // n loops
  const amp=H*0.24;
  ctx.strokeStyle='#60a5fa';ctx.lineWidth=2.8;ctx.beginPath();
  for(let x=0;x<=uw;x++){
    const px=margin+x;
    const y=cy+amp*Math.sin(n*Math.PI*x/uw)*Math.cos(t*0.06);
    x?ctx.lineTo(px,y):ctx.moveTo(px,y);
  }ctx.stroke();
  // Nodes (red circles)
  for(let i=0;i<=n;i++){
    const nx=margin+i*uw/n;
    ctx.fillStyle='#f87171';ctx.beginPath();ctx.arc(nx,cy,6,0,Math.PI*2);ctx.fill();
    ctx.strokeStyle='rgba(248,113,113,0.4)';ctx.lineWidth=1;ctx.setLineDash([2,3]);
    ctx.beginPath();ctx.moveTo(nx,cy-35);ctx.lineTo(nx,cy+35);ctx.stroke();ctx.setLineDash([]);
  }
  // Antinodes (green stars at midpoints)
  for(let i=0;i<n;i++){
    const ax=margin+(i+0.5)*uw/n;
    const ay=cy+amp*Math.cos(t*0.06);
    ctx.fillStyle='#34d399';ctx.font='16px sans-serif';ctx.fillText('★',ax-7,cy+6);
  }
  // λ arrow for first loop
  const lx1=margin,lx2=margin+uw/n;
  ctx.strokeStyle='rgba(251,191,36,0.5)';ctx.lineWidth=1.2;
  ctx.beginPath();ctx.moveTo(lx1,cy+40);ctx.lineTo(lx2,cy+40);ctx.stroke();
  ctx.fillStyle='rgba(251,191,36,0.7)';ctx.font='10px Space Mono';
  ctx.fillText('λ/2',lx1+(lx2-lx1)/2-8,cy+54);
  ctx.fillStyle='rgba(248,113,113,0.7)';ctx.font='10px Space Mono';ctx.fillText('● = nodes',10,H-10);
  ctx.fillStyle='rgba(52,211,153,0.7)';ctx.fillText('  ★ = antinodes',85,H-10);
},

// EXP 7 — Sonometer unchanged
7(ctx,t,p){
  const W=ctx.canvas.width,H=ctx.canvas.height,cy=H*0.40;
  ctx.fillStyle='#040710';ctx.fillRect(0,0,W,H);
  ctx.fillStyle='rgba(240,171,252,0.05)';ctx.strokeStyle='rgba(240,171,252,0.28)';ctx.lineWidth=1.5;
  ctx.beginPath();ctx.roundRect?ctx.roundRect(14,cy+16,W-28,H*0.48,8):ctx.rect(14,cy+16,W-28,H*0.48);
  ctx.fill();ctx.stroke();
  const bL=W*0.22,bR=W*0.78;
  [[bL],[bR]].forEach(([bx])=>{
    ctx.fillStyle='#f0abfc';ctx.beginPath();
    ctx.moveTo(bx-9,cy+16);ctx.lineTo(bx+9,cy+16);ctx.lineTo(bx,cy-2);ctx.closePath();ctx.fill();
  });
  ctx.strokeStyle='rgba(240,171,252,0.28)';ctx.lineWidth=1.5;
  ctx.beginPath();ctx.moveTo(14,cy);ctx.lineTo(W-14,cy);ctx.stroke();
  ctx.strokeStyle='#f0abfc';ctx.lineWidth=2.5;ctx.beginPath();
  for(let x=bL;x<=bR;x++){
    const rel=(x-bL)/(bR-bL);
    const y=cy+H*0.20*Math.sin(Math.PI*rel)*Math.cos(t*0.07);
    x===bL?ctx.moveTo(x,y):ctx.lineTo(x,y);
  }ctx.stroke();
  const rx=(bL+bR)/2,ry=cy+H*0.20*Math.sin(Math.PI*0.5)*Math.cos(t*0.07);
  const fly=Math.abs(Math.cos(t*0.07))>0.82;
  ctx.fillStyle=fly?'rgba(255,255,80,.95)':'rgba(255,255,255,.92)';
  const dy=fly?(Math.abs(Math.cos(t*0.07))-0.82)*55:0;
  ctx.beginPath();ctx.moveTo(rx,ry-3-dy);ctx.lineTo(rx-6,ry-14-dy);ctx.lineTo(rx+6,ry-14-dy);ctx.closePath();ctx.fill();
  if(fly){ctx.fillStyle='rgba(255,255,80,.7)';ctx.font='11px Space Mono';ctx.fillText('RESONANCE!',rx-36,ry-22-dy);}
  // Oscilloscope box
  ctx.strokeStyle='rgba(240,171,252,0.35)';ctx.lineWidth=1;ctx.beginPath();ctx.rect(W-72,8,65,40);ctx.stroke();
  ctx.fillStyle='rgba(240,171,252,0.06)';ctx.fillRect(W-72,8,65,40);
  ctx.strokeStyle='#f0abfc';ctx.lineWidth=1.2;ctx.beginPath();
  for(let x2=0;x2<=62;x2++){ctx.lineTo(W-71+x2,28+13*Math.sin((x2/62)*4*Math.PI+t*0.28));}ctx.stroke();
  ctx.fillStyle='rgba(240,171,252,0.5)';ctx.font='8px Space Mono';ctx.fillText('OSC',W-68,53);
  ctx.fillStyle='rgba(240,171,252,0.65)';ctx.font='11px Space Mono';
  ctx.fillText('🔺 Rider flies off = antinode = resonance!',14,H-10);
},

// EXP 8 — SPEED OF SOUND: correct theory — node at water, antinode at open top
8(ctx,t,p){
  const W=ctx.canvas.width,H=ctx.canvas.height,cx=W/2,tw=50;
  ctx.fillStyle='#040710';ctx.fillRect(0,0,W,H);
  // Fixed water level position (doesn't animate randomly — simulates scanning)
  // Tube
  ctx.strokeStyle='rgba(251,146,60,0.4)';ctx.lineWidth=2;
  ctx.beginPath();ctx.rect(cx-tw/2,H*0.06,tw,H*0.87);ctx.stroke();
  // Water level moves down slowly (scanning)
  const waterH_frac=0.18+0.55*(1-((t*0.006)%1));// fraction of tube height filled with water
  const tubeTop=H*0.06,tubeBot=H*0.93;
  const waterTop=tubeBot-waterH_frac*(tubeBot-tubeTop);
  // Water fill
  ctx.fillStyle='rgba(56,178,172,0.28)';
  ctx.fillRect(cx-tw/2+2,waterTop,tw-4,tubeBot-waterTop);
  // Water surface (shimmers)
  ctx.strokeStyle='rgba(56,178,172,0.55)';ctx.lineWidth=1.5;ctx.beginPath();
  for(let x=cx-tw/2+2;x<=cx+tw/2-2;x++){
    ctx.lineTo(x,waterTop+Math.sin((x-cx)*0.35+t*0.12)*1.8);
  }ctx.stroke();
  // Air column length
  const airLen=waterTop-tubeTop;
  // λ/4 resonance: airLen = λ/4 → show standing wave only when airLen ≈ λ/4 or 3λ/4
  // Continuous displacement standing wave in air column
  // Node at water surface (bottom of air), antinode at open top
  if(airLen>5){
    ctx.strokeStyle='#fb923c';ctx.lineWidth=2.5;ctx.beginPath();
    for(let y=tubeTop;y<=waterTop;y++){
      const rel=(y-tubeTop)/airLen; // 0=open top, 1=water surface
      // Displacement: antinode at open end (rel=0), node at water (rel=1)
      const disp=tw*0.40*Math.sin(Math.PI/2*(1-rel))*Math.cos(t*0.07);
      y===tubeTop?ctx.moveTo(cx+disp,y):ctx.lineTo(cx+disp,y);
    }ctx.stroke();
  }
  // Antinode marker at open top
  ctx.fillStyle='rgba(52,211,153,0.8)';ctx.font='10px Space Mono';
  ctx.fillText('A-NODE (max disp)',cx+tw/2+6,tubeTop+10);
  // Node at water surface
  ctx.fillStyle='rgba(248,113,113,0.8)';ctx.font='10px Space Mono';
  ctx.fillText('NODE (zero disp)',cx+tw/2+6,waterTop-3);
  // Resonance flash: when airLen ≈ λ/4 (quarter wavelength)
  const lambda_approx=H*0.28;// approximate λ for the animation frequency
  const atRes=Math.abs(airLen-lambda_approx/4)<H*0.025||Math.abs(airLen-3*lambda_approx/4)<H*0.025;
  if(atRes){
    ctx.strokeStyle='rgba(251,146,60,0.5)';ctx.lineWidth=3;
    ctx.beginPath();ctx.rect(cx-tw/2,tubeTop,tw,airLen);ctx.stroke();
    ctx.fillStyle='rgba(251,146,60,0.7)';ctx.font='bold 10px Space Mono';
    ctx.fillText('RESONANCE!',cx-tw/2-2,waterTop-18);
  }
  // Tuning fork at top
  ctx.fillStyle='#fb923c';ctx.beginPath();ctx.arc(cx,tubeTop-10,7,0,Math.PI*2);ctx.fill();
  ctx.fillStyle='rgba(251,146,60,0.15)';ctx.beginPath();ctx.arc(cx,tubeTop-10,12+4*Math.abs(Math.sin(t*0.12)),0,Math.PI*2);ctx.fill();
  // L marker arrow
  ctx.strokeStyle='rgba(251,146,60,0.5)';ctx.lineWidth=1;
  ctx.beginPath();ctx.moveTo(cx-tw/2-12,tubeTop);ctx.lineTo(cx-tw/2-12,waterTop);ctx.stroke();
  ctx.fillStyle='rgba(251,146,60,0.6)';ctx.font='10px Space Mono';
  ctx.fillText('L',cx-tw/2-22,(tubeTop+waterTop)/2+4);
  ctx.fillStyle='rgba(251,146,60,0.55)';ctx.font='10px Space Mono';
  ctx.fillText('← water level drops as experiment scans',4,H-8);
}
};

// ══════════════════════════════════════════════════════
// NAVIGATION
// ══════════════════════════════════════════════════════
function boot(lvl){
  level=lvl;
  document.getElementById('ob').style.display='none';
  document.getElementById('app').style.display='flex';
  document.getElementById('lvlPill').textContent=lvl==='ug'?'UNDERGRAD':'LAYMAN';
  goHome();
}
function switchLevel(){
  level=level==='ug'?'lay':'ug';
  document.getElementById('lvlPill').textContent=level==='ug'?'UNDERGRAD':'LAYMAN';
  if(curExp)renderTab('theory');
  toast(level==='ug'?'Undergrad mode ✓':'Layman mode ✓');
}
function goHome(){
  stopSim();clearInterval(stepInterval);
  charts.forEach(c=>c.destroy());charts=[];dataTables=[];
  curExp=null;curStep=0;
  document.getElementById('home').style.display='';
  document.getElementById('detail').style.display='none';
  document.getElementById('expNameBadge').style.display='none';
  buildGrid();
}
function buildGrid(){
  document.getElementById('expGrid').innerHTML=EXPS.map(e=>`
    <div class="exp-card" onclick="openExp(${e.id})" style="border-color:${e.col}22">
      <div class="ec-num" style="color:${e.col}">${e.num}</div>
      <div class="ec-title">${e.title}</div>
      <div class="ec-sub" style="color:${e.col}">${e.sub}</div>
      <div class="ec-desc">${e.desc}</div>
      <div class="ec-tags">${e.tags.map(tg=>`<span class="ec-tag" style="background:${e.col}16;color:${e.col}">${tg}</span>`).join('')}</div>
    </div>`).join('');
}
function openExp(id){
  curExp=EXPS.find(e=>e.id===id);curStep=0;P={};
  charts.forEach(c=>c.destroy());charts=[];dataTables=[];
  document.getElementById('home').style.display='none';
  document.getElementById('detail').style.display='flex';
  const badge=document.getElementById('expNameBadge');
  badge.textContent=`${curExp.num} · ${curExp.title}`;badge.style.display='';
  buildTabBar();renderTab('sim');
}
const TABS=[{id:'sim',label:'▶ Simulation'},{id:'theory',label:'📐 Theory'},{id:'steps',label:'📋 Procedure'},{id:'graph',label:'📊 Graph & Data'},{id:'beat',label:'📏 Graph Paper'},{id:'apps',label:'🌍 Applications'},{id:'errors',label:'⚠ Errors & Fixes'}];
function buildTabBar(){
  document.getElementById('tabBar').innerHTML=TABS.map(tb=>`<button class="tab${tb.id==='sim'?' on':''}" id="t_${tb.id}" onclick="renderTab('${tb.id}')">${tb.label}</button>`).join('');
}
function setTab(id){document.querySelectorAll('.tab').forEach(b=>b.classList.toggle('on',b.id==='t_'+id));}
function renderTab(id){
  setTab(id);stopSim();clearInterval(stepInterval);
  const c=document.getElementById('tabContent');c.innerHTML='';c.className='tc fu';
  if(id==='sim')   buildSim(c);
  if(id==='theory')buildTheory(c);
  if(id==='steps') buildSteps(c);
  if(id==='graph') buildGraph(c);
  if(id==='beat')  buildBeatScale(c);
  if(id==='apps')  buildApps(c);
  if(id==='errors')buildErrors(c);
}

// ══════════════════════════════════════════════════════
// SIM TAB
// ══════════════════════════════════════════════════════
function buildSim(c){
  const e=curExp;
  c.innerHTML=`
  <div class="panel">
    <div class="ph"><div class="ph-dot" style="background:${e.col}"></div><span class="ph-title">${e.title} — Physics Simulation</span><span class="ph-sub">${e.num}</span></div>
    <div class="pb2">
      <div class="sim-ctrls">
        <button class="sbtn go" onclick="startSim()">▶ Play</button>
        <button class="sbtn" onclick="stopSim()">⏸ Pause</button>
        <button class="sbtn" onclick="T=0;P=Object.assign({},P);startSim()">↺ Reset</button>
        ${getSimBtns(e.id)}
        <div class="spd"><label>Speed:</label><input type="range" min="0.2" max="3" step="0.1" value="1" oninput="SPEED=+this.value"></div>
      </div>
      <div class="sim-wrap" style="height:260px"><canvas id="simC" style="width:100%;height:100%"></canvas></div>
      <div class="sim-info">${getSimInfo(e.id)}</div>
    </div>
  </div>`;
  setTimeout(startSim,80);
}
function getSimBtns(id){
  if(id===1)return`<button class="sbtn" onclick="P.phase=0;T=0;startSim()">Line (0°)</button><button class="sbtn" onclick="P.phase=Math.PI/4;T=0;startSim()">Ellipse 45°</button><button class="sbtn" onclick="P.phase=Math.PI/2;P.amplX=1;P.amplY=1;T=0;startSim()">Circle 90°</button><button class="sbtn" onclick="P.phase=Math.PI/2;P.amplX=1;P.amplY=0.6;T=0;startSim()">Ellipse 90°,A≠B</button>`;
  if(id===2)return`<button class="sbtn" onclick="P.mode='in';T=0;startSim()">In-Phase</button><button class="sbtn" onclick="P.mode='out';T=0;startSim()">Out-of-Phase</button><button class="sbtn act" onclick="P.mode='beats';T=0;startSim()">Beats</button>`;
  if(id===3)return`<button class="sbtn" onclick="P.lFrac=0.15;T=0;startSim()">Top (weak)</button><button class="sbtn" onclick="P.lFrac=0.45;T=0;startSim()">Middle</button><button class="sbtn" onclick="P.lFrac=0.75;T=0;startSim()">Bottom (strong)</button>`;
  if(id===4)return`<button class="sbtn" onclick="P.gamma=0.006;P.medName='Air';T=0;startSim()">Air</button><button class="sbtn" onclick="P.gamma=0.018;P.medName='Water';T=0;startSim()">Water</button><button class="sbtn" onclick="P.gamma=0.038;P.medName='Oil 1';T=0;startSim()">Oil 1</button><button class="sbtn" onclick="P.gamma=0.065;P.medName='Oil 2';T=0;startSim()">Oil 2</button>`;
  if(id===5)return``;
  if(id===6)return`<button class="sbtn" onclick="P.loops=1;T=0;startSim()">1 Loop</button><button class="sbtn" onclick="P.loops=2;T=0;startSim()">2 Loops</button><button class="sbtn" onclick="P.loops=3;T=0;startSim()">3 Loops</button><button class="sbtn" onclick="P.loops=4;T=0;startSim()">4 Loops</button><button class="sbtn" onclick="P.loops=5;T=0;startSim()">5 Loops</button>`;
  return'';
}
function getSimInfo(id){
  const d={
    1:`<strong>Lissajous Figure:</strong> Bob (cyan) traces the exact parametric path x=A·cos(ωt), y=B·cos(ωt+Δφ). Yellow dashed lines project x and y motions separately. Small dial (bottom-right) shows phase angle rotation. Use buttons to switch between Line/Ellipse/Circle — the trail updates immediately.`,
    2:`<strong>Coupled Pendulums:</strong> Cyan=A, Yellow=B. Spring shown as yellow coil at mid-rod. Energy bars (right) show amplitude of each pendulum. <strong>In Beats mode</strong> watch energy transfer completely from A→B→A. The standstill moments are the beats.`,
    3:`<strong>Coupling Strength:</strong> Yellow diamonds show where the spring attaches on the rod. Tick marks on the rod help locate the position. κ (coupling strength) and l/L shown top-left. Spring moves to different heights with buttons — watch how the frequency splitting changes.`,
    4:`<strong>Damped Oscillator:</strong> Wave decays with envelope A₀·e^(−γt) (dashed red). Buttons <strong>reset simulation from rest (T=0)</strong> for each medium. γ and Q-factor displayed live. Steeper decay = more damping.`,
    5:`<strong>Resonance Curves — 3 Media:</strong> Air (teal), Water (blue), Oil (yellow). Mountain shape highlights Air resonance peak with ▲ marker. Scanning dot sweeps the Air curve. Note how damping broadens and lowers the peak.`,
    6:`<strong>Standing Waves:</strong> Use 1-5 Loop buttons to see exact n-loop resonance. Red dots = nodes (fixed, zero displacement). Green stars = antinodes (maximum shaking). Yellow arrow shows λ/2 = one loop length. This is exactly what you see in Melde's experiment!`,
    7:`<strong>Sonometer:</strong> Paper rider (white triangle) sits at antinode. At resonance (bright yellow) it flies off. Mini oscilloscope top-right shows the detected sine wave.`,
    8:`<strong>Resonance Column:</strong> Water level drops slowly (simulating the experiment scan). Orange curve = displacement wave — <strong>antinode at open top, node at water surface</strong> — matching theory exactly. Column glows at resonance.`
  };
  return d[id]||'';
}
function startSim(){
  stopSim();
  const canvas=document.getElementById('simC');if(!canvas)return;
  const fn=SIM[curExp.id];if(!fn)return;
  function loop(){rc(canvas);fn(canvas.getContext('2d'),T,P);T+=SPEED;RAF=requestAnimationFrame(loop);}
  loop();
}
function stopSim(){if(RAF){cancelAnimationFrame(RAF);RAF=null;}}

// ══════════════════════════════════════════════════════
// THEORY TAB
// ══════════════════════════════════════════════════════
function buildTheory(c){
  const e=curExp,th=e.theory[level];
  c.innerHTML=`
  <div class="panel">
    <div class="ph"><div class="ph-dot" style="background:${e.col}"></div>
      <span class="ph-title">Theory — ${e.title}</span>
      <div style="margin-left:auto;display:flex;gap:.4rem">
        <button class="sbtn ${level==='ug'?'act':''}" onclick="level='ug';renderTab('theory')">Undergrad</button>
        <button class="sbtn ${level==='lay'?'act':''}" onclick="level='lay';renderTab('theory')">Layman</button>
      </div>
    </div>
    <div class="pb2">
      <div class="derivation"><h4>📖 Overview</h4><p>${th.overview}</p></div>
      <div class="derivation"><h4>${level==='ug'?'📐 Full Derivation':'🧩 Explanation'}</h4><p>${th.derivation}</p></div>
      <div class="fblock">${th.formula}</div>
      ${buildKP(e.id)}
    </div>
  </div>`;
}
const KPS={
  1:[{i:'📏',t:'Phase → Shape',d:'Phase difference alone determines trajectory shape, not amplitudes (for equal amp case).'},{i:'🎯',t:'Initial Conditions',d:'tan(φ) = −v₀/(ω·x₀) — hit at equilibrium gives φ=90°; hit at extreme gives φ=0°.'},{i:'🔄',t:'Equal Frequencies',d:'Lissajous figures only form cleanly when both frequencies are equal (ω₁ = ω₂).'}],
  2:[{i:'🔁',t:'Two Normal Modes',d:'Only 2 frequencies give sinusoidal motion for both pendulums at all times.'},{i:'⚡',t:'Beat Period',d:'T_beat = 2π/(ω₂−ω₁). Stronger coupling → shorter T_beat.'},{i:'🔋',t:'Energy Conservation',d:'Total energy conserved — just shuttles between pendulums.'}],
  3:[{i:'📈',t:'Linear in l²',d:'ω₂² vs l² must be a straight line. Non-linearity = experimental error.'},{i:'🎯',t:'Two-in-One',d:'One graph extracts both ω₀ (intercept) and k (slope).'},{i:'⚖️',t:'Coupling κ ∈ [0,1]',d:'κ=0 → uncoupled pendulums. κ=1 → maximum coupling.'}],
  4:[{i:'📉',t:'Exponential Decay',d:'Amplitude A(t)=A₀·e^(−γt). Log graph → straight line, slope = −γ.'},{i:'🎯',t:'Critical Damping',d:'γ=ω₀: fastest return without oscillation. Ideal for car suspension.'},{i:'🌊',t:'Damped Frequency',d:'ω_d = √(ω₀²−γ²) < ω₀. Damping slightly lowers oscillation frequency.'}],
  5:[{i:'🏔️',t:'Resonance Peak',d:'A_max = F₀·Q/k. Higher Q → taller, sharper peak.'},{i:'90°',t:'Universal Phase Rule',d:'Phase lag = 90° at ω=ω₀ ALWAYS, regardless of damping.'},{i:'📡',t:'Q = ω₀/Δω',d:'Measure half-power bandwidth Δω to find Q experimentally.'}],
  6:[{i:'🌊',t:'Superposition',d:'Standing wave = incident + reflected. Not a separate wave type.'},{i:'🎵',t:'Transverse vs Long.',d:'Longitudinal: fork frequency = 2× string loop frequency.'},{i:'📐',t:'λ = 2l',d:'Each loop = λ/2. Fundamental (n=1): one loop spans half-wavelength.'}],
  7:[{i:'📏',t:'End Correction',d:'Use λ=2(L₂−L₁) — automatically cancels bridge end correction.'},{i:'📈',t:'Slope = V/2',d:'Plot ν vs 1/L. Slope × 2 = wave speed. Far more accurate than single measurement.'},{i:'⚡',t:'Verify Two Ways',d:'V from graph should match V=√(T/μ) within 5%.'}],
  8:[{i:'👂',t:'End Correction',d:'Two-resonance method cancels it: λ=2(l₁−l₀).'},{i:'🌡️',t:'Temperature',d:'v increases 0.61 m/s per °C. Always record room temperature.'},{i:'🔢',t:'Odd Harmonics Only',d:'Closed tube: n=1,3,5... only. Even harmonics need node at closed end → impossible.'}]
};
function buildKP(id){
  const items=(KPS[id]||[]).map(k=>`<div class="kp"><div class="kp-i">${k.i}</div><div class="kp-t">${k.t}</div><div class="kp-d">${k.d}</div></div>`).join('');
  return items?`<div style="font-family:'Space Mono',monospace;font-size:.58rem;color:var(--muted);letter-spacing:.5px;margin-bottom:.5rem;margin-top:.5rem">KEY POINTS</div><div class="kp-grid">${items}</div>`:'';
}

// ══════════════════════════════════════════════════════
// STEPS TAB
// ══════════════════════════════════════════════════════
function buildSteps(c){
  const e=curExp,steps=e.steps;
  c.innerHTML=`
  <div class="panel">
    <div class="ph"><div class="ph-dot" style="background:${e.col}"></div><span class="ph-title">Step-by-Step Procedure</span><span class="ph-sub" id="sCtr">Step 1/${steps.length}</span></div>
    <div class="pb2">
      <div class="prog" id="prog">${steps.map((_,i)=>`<div class="pp ${i===0?'cur':''}" id="pp${i}"></div>`).join('')}</div>
      <div id="sWrap">${steps.map((s,i)=>`<div class="step-row${i===0?' act':''}" id="sr${i}"><div class="sn">${i+1}</div><div class="sc"><div class="st">${s.t}</div><div class="sd">${s.d}</div></div></div>`).join('')}</div>
      <div style="display:flex;gap:.5rem;margin-top:.9rem;flex-wrap:wrap">
        <button class="sbtn" onclick="stepGo(-1)">← Prev</button>
        <button class="sbtn go" onclick="stepGo(1)">Next →</button>
        <button class="sbtn" id="autoBtn" onclick="toggleAuto()">⚡ Auto Walk</button>
        <button class="sbtn" onclick="curStep=0;stepGo(0)">↺ Restart</button>
      </div>
    </div>
  </div>`;
}
function stepGo(dir){
  const max=curExp.steps.length-1;curStep=Math.max(0,Math.min(max,curStep+dir));
  document.getElementById('sCtr').textContent=`Step ${curStep+1}/${curExp.steps.length}`;
  for(let i=0;i<=max;i++){
    document.getElementById('sr'+i)?.classList.toggle('act',i===curStep);
    const pp=document.getElementById('pp'+i);if(pp)pp.className='pp'+(i<curStep?' done':i===curStep?' cur':'');
  }
  document.getElementById('sr'+curStep)?.scrollIntoView({block:'nearest',behavior:'smooth'});
}
function toggleAuto(){
  if(autoOn){clearInterval(stepInterval);autoOn=false;const b=document.getElementById('autoBtn');if(b)b.textContent='⚡ Auto Walk';return;}
  autoOn=true;const b=document.getElementById('autoBtn');if(b)b.textContent='⏹ Stop';
  curStep=0;stepGo(0);
  stepInterval=setInterval(()=>{if(curStep>=curExp.steps.length-1){clearInterval(stepInterval);autoOn=false;const b=document.getElementById('autoBtn');if(b)b.textContent='⚡ Auto Walk';return;}stepGo(1);},2800);
}

// ══════════════════════════════════════════════════════
// GRAPH TAB — Multi-dataset, equations, R², Excel-style tables
// ══════════════════════════════════════════════════════
const DS_COLORS=['#fbbf24','#f87171','#34d399','#a78bfa','#60a5fa','#fb923c','#f0abfc','#00d4c8'];

function buildGraph(c){
  const e=curExp,g=e.graph;
  // Init one default table
  if(dataTables.length===0){
    dataTables.push({id:0,label:'Dataset 1',rows:[{x:g.xDefault,y:g.yDefault}],color:DS_COLORS[0],visible:true});
  }
  c.innerHTML=`
  <div class="panel">
    <div class="ph"><div class="ph-dot" style="background:${e.col}"></div><span class="ph-title">Graph & Data — ${e.title}</span></div>
    <div class="pb2">
      <div style="font-size:.78rem;color:var(--muted);margin-bottom:.8rem">Enter measurements in the table(s) below. Multiple datasets plot on the same graph. Equation + R² computed automatically for each dataset.</div>

      <!-- Dataset tables -->
      <div id="dsTables"></div>

      <!-- Add dataset button -->
      <button class="sbtn" onclick="addDataset()" style="margin-bottom:1rem">+ Add Dataset</button>

      <!-- Chart -->
      <div class="chart-wrap">
        <div class="chart-box"><canvas id="mainChart" style="max-height:310px"></canvas></div>
        <div id="eqBox"></div>
      </div>

      <!-- Stats -->
      <div class="stats-row" id="statsRow">
        <div class="stat"><div class="sl">DATASETS</div><div class="sv d">—</div></div>
        <div class="stat"><div class="sl">BEST R²</div><div class="sv d">—</div></div>
        <div class="stat"><div class="sl">AVG % ERROR</div><div class="sv d">—</div></div>
        <div class="stat"><div class="sl">TIP</div><div class="sv d" style="font-size:.68rem;font-weight:400">Add data points above</div></div>
      </div>
      <div style="font-size:.7rem;color:var(--muted);margin-top:.5rem;font-family:'Space Mono',monospace">${g.note}</div>
    </div>
  </div>`;
  renderDSTables();
  setTimeout(initMainChart,80);
}

function renderDSTables(){
  const wrap=document.getElementById('dsTables');if(!wrap)return;
  const e=curExp,g=e.graph;
  wrap.innerHTML=dataTables.map((ds,di)=>`
    <div style="margin-bottom:.9rem;background:var(--s2);border-radius:12px;padding:.9rem;border:1px solid var(--border)">
      <div style="display:flex;align-items:center;gap:.6rem;margin-bottom:.7rem;flex-wrap:wrap">
        <div style="width:12px;height:12px;border-radius:50%;background:${ds.color};flex-shrink:0"></div>
        <input value="${ds.label}" oninput="dataTables[${di}].label=this.value;refreshChart()"
          style="background:transparent;border:none;color:var(--txt);font-family:'Space Mono',monospace;font-size:.75rem;font-weight:600;width:130px">
        <span style="font-family:'Space Mono',monospace;font-size:.6rem;color:var(--muted)">${g.xLabel} | ${g.yLabel}</span>
        <label style="display:flex;align-items:center;gap:.3rem;font-size:.72rem;color:var(--muted);cursor:pointer;margin-left:auto">
          <input type="checkbox" ${ds.visible?'checked':''} onchange="dataTables[${di}].visible=this.checked;refreshChart()">Show
        </label>
        ${di>0?`<button class="dt-act-btn" onclick="removeDataset(${di})" title="Remove dataset">🗑</button>`:''}
      </div>
      <div class="dt-wrap">
        <table class="dt" id="dt${di}">
          <tr><th>#</th><th>${g.xLabel}</th><th>${g.yLabel}</th><th></th></tr>
          ${ds.rows.map((r,ri)=>`<tr>
            <td style="color:var(--muted)">${ri+1}</td>
            <td><input value="${r.x}" onchange="dataTables[${di}].rows[${ri}].x=+this.value;refreshChart()" type="number" step="any"></td>
            <td><input value="${r.y}" onchange="dataTables[${di}].rows[${ri}].y=+this.value;refreshChart()" type="number" step="any"></td>
            <td><button class="dt-act-btn" onclick="removeRow(${di},${ri})" title="Delete row">✕</button></td>
          </tr>`).join('')}
        </table>
      </div>
      <div style="display:flex;gap:.5rem;margin-top:.5rem;flex-wrap:wrap">
        <button class="sbtn" onclick="addRow(${di})" style="font-size:.7rem;padding:.3rem .65rem">+ Row</button>
        <button class="sbtn" onclick="loadSample(${di})" style="font-size:.7rem;padding:.3rem .65rem">📥 Sample</button>
        <button class="sbtn" onclick="clearRows(${di})" style="font-size:.7rem;padding:.3rem .65rem">🗑 Clear</button>
      </div>
    </div>`).join('');
}

function addDataset(){
  const idx=dataTables.length;
  const g=curExp.graph;
  dataTables.push({id:idx,label:`Dataset ${idx+1}`,rows:[{x:g.xDefault,y:g.yDefault}],color:DS_COLORS[idx%DS_COLORS.length],visible:true});
  renderDSTables();refreshChart();
}
function removeDataset(di){dataTables.splice(di,1);renderDSTables();refreshChart();}
function addRow(di){dataTables[di].rows.push({x:'',y:''});renderDSTables();}
function removeRow(di,ri){dataTables[di].rows.splice(ri,1);renderDSTables();refreshChart();}
function clearRows(di){dataTables[di].rows=[];renderDSTables();refreshChart();}
function loadSample(di){
  const g=curExp.graph;
  dataTables[di].rows=g.tX.map((x,i)=>({x,y:+(g.tY[i]*(1+(Math.random()-.5)*0.09)).toFixed(3)}));
  renderDSTables();refreshChart();toast('Sample data loaded ✓');
}

function initMainChart(){
  if(charts.length>0){charts.forEach(c=>c.destroy());charts=[];}
  const canvas=document.getElementById('mainChart');if(!canvas)return;
  const g=curExp.graph,col=curExp.col;
  const datasets=[{
    label:'Theory',type:'line',
    data:g.tX.map((x,i)=>({x,y:g.tY[i]})),
    borderColor:col+'bb',backgroundColor:col+'14',
    pointRadius:3,borderWidth:2,fill:true,tension:0.4,order:10
  }];
  dataTables.forEach((ds,di)=>{
    if(!ds.visible||!ds.rows.length)return;
    const pts=ds.rows.filter(r=>r.x!==''&&r.y!==''&&!isNaN(r.x)&&!isNaN(r.y)).map(r=>({x:+r.x,y:+r.y}));
    datasets.push({label:ds.label,type:'scatter',data:pts,backgroundColor:ds.color,borderColor:'#fff',pointRadius:7,pointBorderWidth:1,order:di});
    // Trendline
    if(pts.length>=2){
      const tl=linReg(pts);
      const xs=[Math.min(...pts.map(p=>p.x)),Math.max(...pts.map(p=>p.x))];
      datasets.push({label:`${ds.label} fit`,type:'line',data:xs.map(x=>({x,y:tl.m*x+tl.b})),
        borderColor:ds.color+'99',borderWidth:1.5,borderDash:[4,4],pointRadius:0,fill:false,order:di+50});
    }
  });
  const chart=new Chart(canvas,{
    data:{datasets},
    options:{responsive:true,maintainAspectRatio:true,
      plugins:{legend:{labels:{color:'#94a3b8',font:{size:10},boxWidth:12}}},
      scales:{
        x:{type:'linear',grid:{color:'rgba(255,255,255,.05)'},ticks:{color:'#64748b',font:{size:10}},title:{display:true,text:g.xLabel,color:'#64748b',font:{size:10}}},
        y:{grid:{color:'rgba(255,255,255,.05)'},ticks:{color:'#64748b',font:{size:10}},title:{display:true,text:g.yLabel,color:'#64748b',font:{size:10}}}
      }
    }
  });
  charts.push(chart);
  updateEqBox();updateStatsRow();
}

function refreshChart(){
  if(charts.length===0){initMainChart();return;}
  initMainChart();
}

function linReg(pts){
  const n=pts.length;
  const sumX=pts.reduce((a,p)=>a+p.x,0),sumY=pts.reduce((a,p)=>a+p.y,0);
  const sumXY=pts.reduce((a,p)=>a+p.x*p.y,0),sumX2=pts.reduce((a,p)=>a+p.x*p.x,0);
  const m=(n*sumXY-sumX*sumY)/(n*sumX2-sumX*sumX||1);
  const b=(sumY-m*sumX)/n;
  // R²
  const yMean=sumY/n;
  const ssTot=pts.reduce((a,p)=>a+(p.y-yMean)**2,0);
  const ssRes=pts.reduce((a,p)=>a+(p.y-(m*p.x+b))**2,0);
  const r2=ssTot>0?1-ssRes/ssTot:1;
  return{m,b,r2};
}

function updateEqBox(){
  const box=document.getElementById('eqBox');if(!box)return;
  const eqs=dataTables.map(ds=>{
    const pts=ds.rows.filter(r=>r.x!==''&&r.y!==''&&!isNaN(r.x)&&!isNaN(r.y)).map(r=>({x:+r.x,y:+r.y}));
    if(pts.length<2)return'';
    const {m,b,r2}=linReg(pts);
    const sign=b>=0?'+':'-';
    return`<span style="color:${ds.color};margin-right:1rem"><b>${ds.label}:</b> y = ${m.toFixed(4)}x ${sign} ${Math.abs(b).toFixed(4)} &nbsp;|&nbsp; R² = <b style="color:${r2>0.98?'#34d399':r2>0.9?'#fbbf24':'#f87171'}">${r2.toFixed(4)}</b></span>`;
  }).filter(Boolean).join('<br>');
  box.innerHTML=eqs?`<div class="chart-eq">${eqs}</div>`:'';
}

function updateStatsRow(){
  const row=document.getElementById('statsRow');if(!row)return;
  const g=curExp.graph;
  let bestR2=0,totalErr=0,totalN=0;
  dataTables.forEach(ds=>{
    const pts=ds.rows.filter(r=>r.x!==''&&r.y!==''&&!isNaN(r.x)&&!isNaN(r.y)).map(r=>({x:+r.x,y:+r.y}));
    if(pts.length>=2){const{r2}=linReg(pts);bestR2=Math.max(bestR2,r2);}
    pts.forEach(pt=>{
      let best=Infinity,ty=0;
      g.tX.forEach((tx,i)=>{if(Math.abs(tx-pt.x)<best){best=Math.abs(tx-pt.x);ty=g.tY[i];}});
      if(ty)totalErr+=Math.abs((pt.y-ty)/ty)*100;totalN++;
    });
  });
  if(totalN===0){row.innerHTML=`<div class="stat"><div class="sl">DATASETS</div><div class="sv d">${dataTables.length}</div></div><div class="stat"><div class="sl">BEST R²</div><div class="sv d">—</div></div><div class="stat"><div class="sl">AVG % ERROR</div><div class="sv d">—</div></div><div class="stat"><div class="sl">TIP</div><div class="sv d" style="font-size:.68rem;font-weight:400">Add data points above</div></div>`;return;}
  const avg=totalErr/totalN;
  const cls=avg<5?'g':avg<15?'y':'r';
  const r2cls=bestR2>0.98?'g':bestR2>0.90?'y':'r';
  row.innerHTML=`
    <div class="stat"><div class="sl">DATASETS</div><div class="sv">${dataTables.length}</div></div>
    <div class="stat"><div class="sl">BEST R²</div><div class="sv ${r2cls}">${bestR2.toFixed(4)}</div></div>
    <div class="stat"><div class="sl">AVG % ERROR</div><div class="sv ${cls}">${avg.toFixed(1)}%</div></div>
    <div class="stat"><div class="sl">QUALITY</div><div class="sv ${cls}">${avg<5?'Excellent ✓':avg<15?'Good ≈':'Recheck ✗'}</div></div>`;
}

// ══════════════════════════════════════════════════════
// BEAT SCALE / GRAPH PAPER TAB
// ══════════════════════════════════════════════════════
function buildBeatScale(c){
  c.innerHTML=`
  <div class="panel">
    <div class="ph"><div class="ph-dot" style="background:var(--acc2)"></div><span class="ph-title">📏 Graph Paper Generator</span><span class="ph-sub">Customise & use in lab</span></div>
    <div class="pb2">
      <div style="font-size:.78rem;color:var(--muted);margin-bottom:.9rem">Set the number of X and Y grid divisions to generate a scaled graph paper matching your experiment's axis ranges.</div>
      <div class="inp-row" style="gap:.9rem">
        <div class="ig"><label>X-AXIS DIVISIONS</label><input type="number" id="gpX" value="10" min="2" max="40" step="1" oninput="drawGP()"></div>
        <div class="ig"><label>Y-AXIS DIVISIONS</label><input type="number" id="gpY" value="10" min="2" max="40" step="1" oninput="drawGP()"></div>
        <div class="ig"><label>X MIN</label><input type="number" id="gpXmin" value="0" step="any" oninput="drawGP()"></div>
        <div class="ig"><label>X MAX</label><input type="number" id="gpXmax" value="10" step="any" oninput="drawGP()"></div>
        <div class="ig"><label>Y MIN</label><input type="number" id="gpYmin" value="0" step="any" oninput="drawGP()"></div>
        <div class="ig"><label>Y MAX</label><input type="number" id="gpYmax" value="10" step="any" oninput="drawGP()"></div>
        <div class="ig"><label>X LABEL</label><input type="text" id="gpXlabel" value="${curExp.graph.xLabel.substring(0,20)}" style="width:150px" oninput="drawGP()"></div>
        <div class="ig"><label>Y LABEL</label><input type="text" id="gpYlabel" value="${curExp.graph.yLabel.substring(0,20)}" style="width:150px" oninput="drawGP()"></div>
        <div class="ig"><label>GRID COLOR</label>
          <select id="gpColor" onchange="drawGP()">
            <option value="#00d4c8">Teal</option><option value="#fbbf24">Yellow</option>
            <option value="#f87171">Red</option><option value="#94a3b8">Grey</option>
          </select>
        </div>
      </div>
      <div class="beat-grid-wrap"><canvas id="gpCanvas" style="width:100%;height:100%"></canvas></div>
      <div style="margin-top:.7rem;font-size:.73rem;color:var(--muted)">Tip: Use browser Print (Ctrl+P) → "Print to PDF" to save this graph paper for your lab notebook.</div>
    </div>
  </div>`;
  setTimeout(drawGP,60);
}
function drawGP(){
  const canvas=document.getElementById('gpCanvas');if(!canvas)return;
  rc(canvas);
  if(canvas.width<100){canvas.width=800;canvas.height=500;}
  const ctx=canvas.getContext('2d');
  const W=canvas.width,H=canvas.height;
  const nx=+document.getElementById('gpX')?.value||10;
  const ny=+document.getElementById('gpY')?.value||10;
  const xmin=+document.getElementById('gpXmin')?.value||0;
  const xmax=+document.getElementById('gpXmax')?.value||10;
  const ymin=+document.getElementById('gpYmin')?.value||0;
  const ymax=+document.getElementById('gpYmax')?.value||10;
  const xlbl=document.getElementById('gpXlabel')?.value||'X';
  const ylbl=document.getElementById('gpYlabel')?.value||'Y';
  const gcol=document.getElementById('gpColor')?.value||'#00d4c8';
  ctx.fillStyle='#040710';ctx.fillRect(0,0,W,H);
  const L=55,R=20,T2=20,B=50;
  const pw=W-L-R,ph=H-T2-B;
  // Minor grid
  ctx.strokeStyle=gcol+'22';ctx.lineWidth=0.6;
  for(let i=0;i<=nx*2;i++){const x=L+i*pw/(nx*2);ctx.beginPath();ctx.moveTo(x,T2);ctx.lineTo(x,T2+ph);ctx.stroke();}
  for(let i=0;i<=ny*2;i++){const y=T2+i*ph/(ny*2);ctx.beginPath();ctx.moveTo(L,y);ctx.lineTo(L+pw,y);ctx.stroke();}
  // Major grid
  ctx.strokeStyle=gcol+'55';ctx.lineWidth=1.2;
  for(let i=0;i<=nx;i++){const x=L+i*pw/nx;ctx.beginPath();ctx.moveTo(x,T2);ctx.lineTo(x,T2+ph);ctx.stroke();}
  for(let i=0;i<=ny;i++){const y=T2+i*ph/ny;ctx.beginPath();ctx.moveTo(L,y);ctx.lineTo(L+pw,y);ctx.stroke();}
  // Axes
  ctx.strokeStyle=gcol+'99';ctx.lineWidth=2;
  ctx.beginPath();ctx.moveTo(L,T2);ctx.lineTo(L,T2+ph);ctx.stroke();
  ctx.beginPath();ctx.moveTo(L,T2+ph);ctx.lineTo(L+pw,T2+ph);ctx.stroke();
  // X ticks and labels
  ctx.fillStyle=gcol+'cc';ctx.font='10px Space Mono';ctx.textAlign='center';
  for(let i=0;i<=nx;i++){
    const x=L+i*pw/nx;const val=(xmin+i*(xmax-xmin)/nx).toPrecision(3);
    ctx.fillText(val,x,T2+ph+14);
  }
  // Y ticks and labels
  ctx.textAlign='right';
  for(let i=0;i<=ny;i++){
    const y=T2+i*ph/ny;const val=(ymax-i*(ymax-ymin)/ny).toPrecision(3);
    ctx.fillText(val,L-5,y+4);
  }
  // Axis labels
  ctx.textAlign='center';ctx.fillStyle=gcol+'ee';ctx.font='11px Space Mono';
  ctx.fillText(xlbl,L+pw/2,T2+ph+32);
  ctx.save();ctx.translate(16,T2+ph/2);ctx.rotate(-Math.PI/2);ctx.fillText(ylbl,0,0);ctx.restore();
  // Title
  ctx.font='12px Syne';ctx.fillStyle='rgba(255,255,255,0.5)';
  ctx.fillText(`${curExp.num} · ${curExp.title}`,L+pw/2,13);
}

// ══════════════════════════════════════════════════════
// APPS & ERRORS TABS
// ══════════════════════════════════════════════════════
function buildApps(c){
  const e=curExp;
  c.innerHTML=`<div class="panel"><div class="ph"><div class="ph-dot" style="background:${e.col}"></div><span class="ph-title">Real-World Applications — ${e.title}</span></div><div class="pb2">
    <div style="font-size:.8rem;color:var(--muted);margin-bottom:.9rem">Where <strong style="color:${e.col}">${e.title}</strong> physics appears in engineering, medicine, and nature:</div>
    <div class="apps-grid">${e.apps.map(a=>`<div class="app-card"><div class="app-icon">${a.icon}</div><div class="app-name">${a.n}</div><div class="app-desc">${a.d}</div></div>`).join('')}
    </div></div></div>`;
}
function buildErrors(c){
  const e=curExp;
  c.innerHTML=`<div class="panel"><div class="ph"><div class="ph-dot" style="background:var(--acc3)"></div><span class="ph-title">Error Sources & Fixes — ${e.title}</span></div><div class="pb2">
    ${e.errors.map((err,i)=>`<div class="err-card"><div class="err-title"><span style="color:var(--acc3)">✗ Error ${i+1}:</span> ${err.e}</div><div class="err-fix">✓ Fix: ${err.fix}</div></div>`).join('')}
    <div class="err-card" style="border-left-color:var(--acc2);margin-top:.8rem">
      <div class="err-title" style="color:var(--acc2)">📌 Universal Precautions</div>
      <div style="font-size:.76rem;line-height:1.8;color:var(--txt)">
        • Small oscillation amplitudes — keeps small-angle approximation valid<br>
        • Minimum 10 readings — compute mean ± SD for each quantity<br>
        • Record room temperature — affects damping, viscosity, sound speed<br>
        • Calibrate instruments before each session<br>
        • Mark disturbed trials and exclude from analysis
      </div>
    </div>
  </div></div>`;
}

function toast(msg){const t=document.getElementById('toast');t.textContent=msg;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),2200);}