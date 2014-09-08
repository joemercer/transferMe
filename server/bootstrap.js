
// bootstrap the app with some data
Meteor.startup(function() {

  // check for existing data
  if (Schools.find().count() === 0) {

  	// schools
  	var u = Schools.insert({
  		name: 'University of Waterloo',
			courses: [],
			createdBy: 'jmercer@uwaterloo.ca'
  	});
		var h = Schools.insert({
			name: 'Hong Kong University of Science and Technology',
			courses: [],
			createdBy: 'jmercer@uwaterloo.ca'
		});

		// courses

		var pmath351 = Courses.insert({
			school: u,
      name: 'PMATH 351',
      description: 'Real Analysis: Normed and metric spaces, open sets, continuous mappings, sequence and function spaces, completeness, contraction mappings, compactness of metric spaces, finite-dimensional normed spaces, Arzela-Ascoli theorem, existence of solutions of differential equations, Stone-Weierstrass theorem.',
      createdBy: 'jmercer@uwaterloo.ca'
		});
  	var pmath352 = Courses.insert({
			school: u,
      name: 'PMATH 352',
      description: 'Complex Analysis: Analytic functions, Cauchy-Riemann equations, Goursat\'s theorem, Cauchy\'s theorems, Morera\'s theorem, Liouville\'s theorem, maximum modulus principle, harmonic functions, Schwarz\'s lemma, isolated singularities, Laurent series, residue theorem.',
      createdBy: 'jmercer@uwaterloo.ca'
		});
		var pmath360 = Courses.insert({
			school: u,
      name: 'PMATH 360',
      description: "Geometry: An introduction to affine, projective and non-Euclidean forms of geometry. Conic sections in the projective plane. Inversion in circles. Theorems of Desargues, Pappus, and Pascal.",
      createdBy: 'jmercer@uwaterloo.ca'
		});
		var pmath365 = Courses.insert({
			school: u,
      name: 'PMATH 365',
      description: "Elementary Differential Geometry: An introduction to local differential geometry, laying the groundwork for both global differential geometry and general relativity. Submanifolds of n-dimensional Euclidean space. Embedded curves and the intrinsic geometry of surfaces in Euclidean 3-space. Metrics, geodesics, and curvature. Gaussian curvature and the Gauss-Bonnet theorem. [Offered: W]",
      createdBy: 'jmercer@uwaterloo.ca'
		});
		var pmath340 = Courses.insert({
			school: u,
      name: 'PMATH 340',
      description: "Elementary Number Theory: An elementary approach to the theory of numbers; the Euclidean algorithm, congruence equations, multiplicative functions, solutions to Diophantine equations, continued fractions, and rational approximations to real numbers.",
      createdBy: 'jmercer@uwaterloo.ca'
		});
		var pmath347 = Courses.insert({
			school: u,
      name: 'PMATH 347',
      description: "Groups and Rings: Groups, subgroups, homomorphisms and quotient groups, isomorphism theorems, group actions, Cayley and Lagrange theorems, permutation groups and the fundamental theorem of finite abelian groups. Elementary properties of rings, subrings, ideals, homomorphisms and quotients, isomorphism theorems, polynomial rings, and unique factorization domains.",
      createdBy: 'jmercer@uwaterloo.ca'
		});
		var pmath348 = Courses.insert({
			school: u,
      name: 'PMATH 348',
      description: "Fields and Galois Theory: Fields, algebraic and transcendental extensions, minimal polynomials, Eisenstein's criterion, splitting fields, and the structure of finite fields. Sylow theorems and solvable groups. Galois theory. The insolvability of the quintic.",
      createdBy: 'jmercer@uwaterloo.ca'
		});
		var pmath331 = Courses.insert({
			school: u,
      name: 'PMATH 331',
      description: "Applied Real Analysis: Topology of Euclidean spaces, continuity, norms, completeness. Contraction mapping principle. Fourier series. Various applications, for example, to ordinary differential equations, optimization and numerical approximation.",
      createdBy: 'jmercer@uwaterloo.ca'
		});
		var stat330 = Courses.insert({
			school: u,
      name: 'STAT 330',
      description: "Mathematical Statistics: Maximum likelihood estimation. Random variables and distribution theory. Generating functions. Functions of random variables. Limiting distributions. Large sample theory of likelihood methods. Likelihood ratio tests.",
      createdBy: 'jmercer@uwaterloo.ca'
		});
		var stat333 = Courses.insert({
			school: u,
      name: 'STAT 333',
      description: "Applied Probability: Review of basic probability. Generating functions. Theory of recurrent events. Markov chains, Markov processes, and their applications. [Offered: F,W,S]",
      createdBy: 'jmercer@uwaterloo.ca'
		});
		var co456 = Courses.insert({
			school: u,
      name: 'CO 456',
      description: "Introduction to Game Theory: A broad introduction to game theory and its applications to the modeling of competition and cooperation in business, economics and society. Two-person games in strategic form and Nash equilibria. Extensive form games, including multi-stage games. Coalition games and the core. Bayesian games, mechanism design and auctions.",
      createdBy: 'jmercer@uwaterloo.ca'
		});
		var amath242 = Courses.insert({
			school: u,
      name: 'AMATH 242',
      description: "Introduction to Computational Mathematics: A rigorous introduction to the field of computational mathematics. The focus is on the interplay between continuous models and their solution via discrete processes. Topics include: pitfalls in computation, solution of linear systems, interpolation, discrete Fourier transforms and numerical integration. Applications are used as motivation.",
      createdBy: 'jmercer@uwaterloo.ca'
		});
		var cs240 = Courses.insert({
			school: u,
      name: 'CS 240',
      description: "Data Structures and Data Management: Introduction to widely used and effective methods of data organization, focusing on data structures, their algorithms, and the performance of these algorithms. Specific topics include priority queues, sorting, dictionaries, data structures for text processing.",
      createdBy: 'jmercer@uwaterloo.ca'
		});
		var cs370 = Courses.insert({
			school: u,
      name: 'CS 370',
      description: "Numerical Computation: Principles and practices of basic numerical computation as a key aspect of scientific computation. Visualization of results. Approximation by splines, fast Fourier transforms, solution of linear and nonlinear equations, differential equations, floating point number systems, error, stability. Presented in the context of specific applications to image processing, analysis of data, scientific modeling.",
      createdBy: 'jmercer@uwaterloo.ca'
		});




		var math4321 = Courses.insert({
			school: h,
      name: 'MATH 4321',
      description: "Game Theory: [3 Credit(s)][Previous Course Code(s): MATH 310] Zero-sum games; minimax theorem; games in extensive form; strategic equilibrium; bi-matrix games; repeated Prisonner's Dilemma; evolutionary stable strategies; games in coalition form; core; Shapley Value; Power Index; two-side matching games. Exclusion(s): SOSC 1410 Prerequisite(s): (MATH 2010 OR MATH 2011 OR MATH 2021 OR MATH 2023 OR MATH 3043) AND (MATH 2111 OR MATH 2121 OR MATH 2131 OR MATH 2350)",
      createdBy: 'jmercer@uwaterloo.ca'
		});

		var math4223 = Courses.insert({
			school: h,
      name: 'MATH 4223',
      description: "Differential Geometry: [3 Credit(s)][Previous Course Code(s): MATH 321] Curve theory; curvature and torsion, Frenet-Serret frame; surface theory: Weingarten map, first and second fundamental forms, curvatures, Gaussian map, ruled surface, minimal surface; instrinsic geometry: Theorema Egregium, Coddazi-Mainardi equations, parallel transport, geodesics, exponential map, Gauss-Bonnet theorem. Prerequisite(s): MATH 2011/MATH 2021/MATH 2023/MATH 3043 and MATH 2121/MATH 2131",
      createdBy: 'jmercer@uwaterloo.ca'
		});
		var math4221 = Courses.insert({
			school: h,
      name: 'MATH 4221',
      description: "Euclidean and Non-Euclidean Geometries: [3 Credit(s)][Previous Course Code(s): MATH 320] Axioms and models, Euclidean geometry, Hilbert axioms, neutral (absolute) geometry, hyperbolic geometry, Poincare model, independence of parallel postulate. Prerequisite(s): MATH 2031 OR MATH 2033 OR MATH 2043 OR MATH 2111 OR MATH 2121 OR MATH 2131 OR MATH 2350 OR MATH 2721",
      createdBy: 'jmercer@uwaterloo.ca'
		});
		var math4141 = Courses.insert({
			school: h,
      name: 'MATH 4141',
      description: "Number Theory and Applications: [3 Credit(s)][Previous Course Code(s): MATH 315] Prime numbers, unique factorization, modular arithmetic, quadratic number fields, finite fields, p-adic numbers, coding theory, computational complexity. Prerequisite(s): MATH 2131 Corequisite(s): (for students without prerequisites) MATH 3121",
      createdBy: 'jmercer@uwaterloo.ca'
		});
		var math4061 = Courses.insert({
			school: h,
      name: 'MATH 4061',
      description: "Topics in Modern Analysis: [2 Credit(s)][Previous Course Code(s): MATH 370] Examples and properties of metric spaces. Contractive mapping theorem, Baire category theorem, Stone-Weierstrass theorem, Arzela-Ascoli theorem. Properties of normed spaces and Hibert spaces. Riesz theorem. Completeness of Lp functions, continuous functions and functions of bounded variations. Best approximation theorem on Hilbert space. Prerequisite(s): MATH 3043 or MATH 3033",
      createdBy: 'jmercer@uwaterloo.ca'
		});
		var math4023 = Courses.insert({
			school: h,
      name: 'MATH 4023',
      description: "Complex Analysis: [3 Credit(s)][Previous Course Code(s): MATH 304] Complex differentiability; Cauchy-Riemann equations; contour integrals, Cauchy theory and consequences; power series representation; isolated singularities and Laurent series; residue theorem; conformal mappings. Prerequisite(s): (MATH 2010 OR MATH 2011 OR MATH 2021 OR MATH 2023 OR MATH 3043) AND (MATH 2031 OR MATH 2033 OR MATH 2043)",
      createdBy: 'jmercer@uwaterloo.ca'
		});
		var math3425 = Courses.insert({
			school: h,
      name: 'MATH 3425',
      description: "Stochastic Modeling: [3 Credit(s)][Previous Course Code(s): MATH 341] Discrete time Markov chains and the Poisson processes. Additional topics include birth and death process, elementary renewal process and continuous-time Markov chains. Prerequisite(s): MATH 2411/MATH 2421",
      createdBy: 'jmercer@uwaterloo.ca'
		});
		var math3423 = Courses.insert({
			school: h,
      name: 'MATH 3423',
      description: "Statistical Inference: [3 Credit(s)][Previous Course Code(s): MATH 243] Sampling theory, order statistics, limiting distributions, point estimation, confidence intervals, hypothesis testing, non-parametric methods. Prerequisite(s): MATH 2421",
      createdBy: 'jmercer@uwaterloo.ca'
		});
		var math3131 = Courses.insert({
			school: h,
      name: 'MATH 3131',
      description: "Honors in Linear and Abstract Algebra II: [4 Credit(s)][Previous Course Code(s): MATH 218] The MATH 2131 and 3131 is a sequence of highly rigorous introduction to linear algebra and abstract algebra. Groups, rings, homomorphisms, quotients, group actions, polynomial rings, Chinese remainder theorem, field extensions. Prerequisite(s): Grade B- or above in MATH 2131",
      createdBy: 'jmercer@uwaterloo.ca'
		});
		var math3312 = Courses.insert({
			school: h,
      name: 'MATH 3312',
      description: "Numerical Analysis: [3 Credit(s)][Previous Course Code(s): MATH 231] Basic numerical analysis, including stability of computation, linear systems, eigenvalues and eigenvectors, nonlinear equations, interpolation and approximation, numerical integration and solution of ordinary differential equations, optimization. Exclusion(s): MATH 3311, PHYS 3142, MECH 4740 Prerequisite(s): (COMP 1002 / COMP 1004 / COMP 1021 / COMP 1022P / COMP 1022Q) AND (MATH 2111 / MATH 2121 / MATH 2131 / MATH 2350) AND (MATH 2031 / MATH 2033 / MATH 2043)",
      createdBy: 'jmercer@uwaterloo.ca'
		});
		var math3043 = Courses.insert({
			school: h,
      name: 'MATH 3043',
      description: "Honors Real Analysis: [4 Credit(s)][Previous Course Code(s): MATH 204] The MATH 2043 and 3043 is a rigorous sequence in analysis on the line and higher dimensional Euclidean spaces. Differentiation and integration in higher dimensions, implicit function and inverse function theorem, Stokes theorem, and Lebesgue measure. Exclusion(s): MATH 3033 Prerequisite(s): Grade A- or above in MATH 2043",
      createdBy: 'jmercer@uwaterloo.ca'
		});
		var math3033 = Courses.insert({
			school: h,
      name: 'MATH 3033',
      description: "Real Analysis: [4 Credit(s)][Previous Course Code(s): MATH 301] Functions of several variables, implicit and inverse function theorem, uniform convergence measure and integral on the real line. Exclusion(s): MATH 3043 Prerequisite(s): (MATH 2010 / MATH 2011 / MATH 2021 / MATH 2023) AND (MATH 2031 / MATH 2033 / MATH 2043) AND (MATH 2111 / MATH 2121 / MATH 2131 / MATH 2350",
      createdBy: 'jmercer@uwaterloo.ca'
		});
		var comp3711 = Courses.insert({
			school: h,
      name: 'COMP 3711',
      description: "Design and Analysis of Algorithms: [3 Credit(s)][Previous Course Code(s): COMP 271] Techniques for designing algorithms, proving their correctness, and analyzing their running times. Topics covered include: sorting, selection, heaps, balanced search trees, divide-and-conquer, greedy algorithms, dynamic programming, and graph algorithms. Exclusion(s): COMP 3711H Prerequisite(s): (COMP 2011 OR COMP 2012 OR COMP 2012H) AND (COMP 2711 OR COMP 2711H OR MATH 2343)",
      createdBy: 'jmercer@uwaterloo.ca'
		});



		Schools.update({_id: u}, {
      $push: { courses: { $each: [
      	pmath331, pmath348, pmath347, pmath340, pmath365, pmath360, 
      	pmath351, pmath352, stat330, stat333, co456, amath242, 
      	cs240, cs370
      ] } }
    });


		Schools.update({_id: h}, {
      $push: { courses: { $each: [
      	math3033, math3043, math3312, math3131, math3423, math3425, 
      	math4023, math4061, math4141, math4221, math4223, math4321,
      	comp3711
      ] } }
    });


		// course equivelents

		CourseEquivelents.insert({
      homeSchool: u,
      homeSchoolCourse: pmath331,
      exchangeSchool: h,
      exchangeSchoolCourse: math4061,
      pending: false,
      approved: true
    });
    CourseEquivelents.insert({
      homeSchool: u,
      homeSchoolCourse: pmath351,
      exchangeSchool: h,
      exchangeSchoolCourse: math4061,
      pending: false,
      approved: true
    });
    CourseEquivelents.insert({
      homeSchool: u,
      homeSchoolCourse: pmath351,
      exchangeSchool: h,
      exchangeSchoolCourse: math3033,
      pending: false,
      approved: false
    });
    CourseEquivelents.insert({
      homeSchool: u,
      homeSchoolCourse: pmath351,
      exchangeSchool: h,
      exchangeSchoolCourse: math3043,
      pending: false,
      approved: false
    });
    CourseEquivelents.insert({
      homeSchool: u,
      homeSchoolCourse: pmath352,
      exchangeSchool: h,
      exchangeSchoolCourse: math4023,
      pending: false,
      approved: false
    });

    CourseEquivelents.insert({
      homeSchool: u,
      homeSchoolCourse: pmath340,
      exchangeSchool: h,
      exchangeSchoolCourse: math4061,
      pending: false,
      approved: true
    });

    CourseEquivelents.insert({
      homeSchool: u,
      homeSchoolCourse: pmath360,
      exchangeSchool: h,
      exchangeSchoolCourse: math4221,
      pending: false,
      approved: true
    });
    CourseEquivelents.insert({
      homeSchool: u,
      homeSchoolCourse: pmath365,
      exchangeSchool: h,
      exchangeSchoolCourse: math4223,
      pending: false,
      approved: true
    });

    CourseEquivelents.insert({
      homeSchool: u,
      homeSchoolCourse: stat330,
      exchangeSchool: h,
      exchangeSchoolCourse: math3423,
      pending: false,
      approved: false
    });

    CourseEquivelents.insert({
      homeSchool: u,
      homeSchoolCourse: stat333,
      exchangeSchool: h,
      exchangeSchoolCourse: math3425,
      pending: false,
      approved: true
    });

    CourseEquivelents.insert({
      homeSchool: u,
      homeSchoolCourse: co456,
      exchangeSchool: h,
      exchangeSchoolCourse: math4321,
      pending: false,
      approved: true
    });

    CourseEquivelents.insert({
      homeSchool: u,
      homeSchoolCourse: cs240,
      exchangeSchool: h,
      exchangeSchoolCourse: comp3711,
      pending: false,
      approved: true
    });

    CourseEquivelents.insert({
      homeSchool: u,
      homeSchoolCourse: amath242,
      exchangeSchool: h,
      exchangeSchoolCourse: math3312,
      pending: true,
      approved: false
    });
    CourseEquivelents.insert({
      homeSchool: u,
      homeSchoolCourse: cs370,
      exchangeSchool: h,
      exchangeSchoolCourse: math3312,
      pending: true,
      approved: false
    });

  }

});