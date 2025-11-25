export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Top nav */}
      <header className="border-b border-red-600/50">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full border-2 border-red-600 flex items-center justify-center text-xs font-bold">
              UA
            </div>
            <div>
              <div className="text-sm font-semibold tracking-widest text-red-500">
                UNLTD ACADEMY
              </div>
              <div className="text-xs text-zinc-400">
                TRAINING PLATFORM
              </div>
            </div>
          </div>

          <nav className="hidden items-center gap-6 text-sm text-zinc-300 md:flex">
            <a href="#coaches" className="hover:text-red-500 transition">
              For Coaches
            </a>
            <a href="#athletes" className="hover:text-red-500 transition">
              For Athletes
            </a>
            <a href="#features" className="hover:text-red-500 transition">
              Features
            </a>
            <a href="#how-it-works" className="hover:text-red-500 transition">
              How It Works
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <button className="hidden rounded-full border border-zinc-600 px-4 py-1.5 text-xs font-medium text-zinc-200 hover:border-red-500 hover:text-red-500 md:inline-flex transition">
              Log In
            </button>
            <button className="rounded-full bg-red-600 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide hover:bg-red-500 transition">
              Request Access
            </button>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="border-b border-red-600/40 bg-gradient-to-b from-black via-black to-zinc-950">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-14 md:flex-row md:items-center">
          {/* Left: Text */}
          <div className="flex-1">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-red-500">
              THE KEY · UNLTD ACADEMY
            </p>
            <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
              One platform to program, track,
              <span className="block text-red-500">and unlock every athlete.</span>
            </h1>
            <p className="mt-4 max-w-xl text-sm text-zinc-300 sm:text-base">
              Build multi-week programs, assign them to teams, and let athletes log every
              rep—from the gym, court, field, or at home. Designed around{' '}
              <span className="font-semibold text-red-400">The Key</span> levels and
              the way you actually coach.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <button className="rounded-full bg-red-600 px-6 py-2 text-xs font-semibold uppercase tracking-wide hover:bg-red-500 transition">
                Book a Platform Walkthrough
              </button>
              <button className="rounded-full border border-zinc-600 px-5 py-2 text-xs font-medium text-zinc-200 hover:border-red-400 hover:text-red-400 transition">
                View Coach Demo
              </button>
            </div>

            <div className="mt-6 flex flex-wrap gap-4 text-[11px] text-zinc-400">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                Built for multi-sport: tennis · football · basketball · baseball · track · lacrosse
              </div>
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                Coaches see progression. Athletes see “Today’s Workout.”
              </div>
            </div>
          </div>

          {/* Right: Dashboard mock */}
          <div className="flex-1">
            <div className="mx-auto max-w-md rounded-2xl border border-red-600/50 bg-zinc-950/80 p-4 shadow-[0_0_40px_rgba(220,38,38,0.35)]">
              <div className="mb-3 flex items-center justify-between text-xs text-zinc-400">
                <span className="font-semibold text-zinc-200">Coach Dashboard</span>
                <span className="rounded-full bg-red-600/20 px-2 py-0.5 text-[10px] uppercase tracking-wide text-red-300">
                  Live Preview
                </span>
              </div>

              {/* Fake calendar row */}
              <div className="mb-4 rounded-lg border border-zinc-700 bg-black/60 p-3">
                <div className="mb-2 flex items-center justify-between text-[11px] text-zinc-400">
                  <span className="font-medium text-zinc-200">This Week</span>
                  <span>Teams · Athletes · At-Home</span>
                </div>
                <div className="grid grid-cols-7 gap-1 text-center text-[10px] text-zinc-400">
                  {"M", "T", "W", "T", "F", "S", "S"}.map((d) => (
                    <div
                      key={d}
                      className="flex h-8 flex-col items-center justify-center rounded-md bg-zinc-900"
                    >
                      <span>{d}</span>
                      <span className="mt-0.5 h-1 w-6 rounded-full bg-red-600/60" />
                    </div>
                  ))
                </div>
              </div>

              {/* Two-column split: Coaches vs Athletes */}
              <div className="grid grid-cols-2 gap-3 text-[11px]">
                <div className="rounded-lg border border-zinc-700 bg-black/70 p-3">
                  <div className="mb-1 text-[10px] font-semibold uppercase tracking-wide text-red-400">
                    Coaches See
                  </div>
                  <ul className="space-y-1 text-zinc-300">
                    <li>• Calendar of all sessions</li>
                    <li>• Assigned programs & teams</li>
                    <li>• Logged sets & progression</li>
                  </ul>
                </div>
                <div className="rounded-lg border border-zinc-700 bg-black/70 p-3">
                  <div className="mb-1 text-[10px] font-semibold uppercase tracking-wide text-red-400">
                    Athletes See
                  </div>
                  <ul className="space-y-1 text-zinc-300">
                    <li>• “Today’s Workout”</li>
                    <li>• At-home plans</li>
                    <li>• Past sessions & history</li>
                  </ul>
                </div>
              </div>

              {/* Bottom badges */}
              <div className="mt-4 flex flex-wrap gap-2 text-[10px] text-zinc-400">
                <span className="rounded-full border border-zinc-700 px-2 py-1">
                  Multi-week programs
                </span>
                <span className="rounded-full border border-zinc-700 px-2 py-1">
                  Exercise Library w/ videos
                </span>
                <span className="rounded-full border border-zinc-700 px-2 py-1">
                  Blast · Drive · Elevate · Overdrive
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section id="features" className="border-b border-zinc-800 bg-black">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <h2 className="text-xl font-bold text-white">
            Built around how you actually coach.
          </h2>
          <p className="mt-2 text-sm text-zinc-400 max-w-xl">
            UNLTD isn’t just a workout log. It mirrors your real programming flow:
            exercises → templates → multi-week programs → assignments → logged sets.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-4">
              <div className="text-xs font-semibold uppercase tracking-wide text-red-400">
                Exercise Library
              </div>
              <p className="mt-2 text-sm text-zinc-300">
                Save every exercise once—with categories, equipment, sport/level tags, and
                video links—then plug it into any workout.
              </p>
            </div>

            <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-4">
              <div className="text-xs font-semibold uppercase tracking-wide text-red-400">
                Programs & Levels
              </div>
              <p className="mt-2 text-sm text-zinc-300">
                Map The Key levels (Blast, Drive, Elevate, Overdrive, Peak) to real
                multi-week plans across sports.
              </p>
            </div>

            <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-4">
              <div className="text-xs font-semibold uppercase tracking-wide text-red-400">
                Live Tracking
              </div>
              <p className="mt-2 text-sm text-zinc-300">
                Athletes log sets (weight, reps, RPE, notes) and coaches see progression
                on each key lift or movement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* COACHES SECTION */}
      <section id="coaches" className="border-b border-zinc-800 bg-zinc-950">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-xl font-bold text-white">For Coaches & Directors</h2>
              <p className="mt-2 text-sm text-zinc-400">
                Whether you’re running a summer camp, small group sessions, or a full
                academy, UNLTD keeps all programming in one place.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-zinc-300">
                <li>• Build templates like “Blast Lower A – Gym” once and reuse them.</li>
                <li>• Assign programs to individual athletes or full teams.</li>
                <li>• Filter your calendar by team, athlete, environment, or status.</li>
                <li>• Quickly check if athletes are actually doing at-home work.</li>
              </ul>
            </div>
            <div className="rounded-xl border border-red-600/40 bg-black p-4">
              <div className="text-xs font-semibold uppercase tracking-wide text-red-400 mb-3">
                Coach View · Sample Calendar
              </div>
              <div className="space-y-2 text-[11px]">
                <div className="flex items-center justify-between rounded-lg border border-zinc-800 bg-zinc-950 px-3 py-2">
                  <div>
                    <div className="text-xs font-semibold text-zinc-100">
                      4:00 PM · Blast Strength – Lower
                    </div>
                    <div className="text-[10px] text-zinc-400">
                      Tennis · Gym · Team A
                    </div>
                  </div>
                  <span className="rounded-full bg-green-500/20 px-2 py-1 text-[10px] text-green-400">
                    Planned
                  </span>
                </div>

                <div className="flex items-center justify-between rounded-lg border border-zinc-800 bg-zinc-950 px-3 py-2">
                  <div>
                    <div className="text-xs font-semibold text-zinc-100">
                      5:30 PM · Drive Speed – Field
                    </div>
                    <div className="text-[10px] text-zinc-400">
                      Football · Field · Group Speed
                    </div>
                  </div>
                  <span className="rounded-full bg-yellow-500/20 px-2 py-1 text-[10px] text-yellow-400">
                    In Progress
                  </span>
                </div>

                <div className="flex items-center justify-between rounded-lg border border-zinc-800 bg-zinc-950 px-3 py-2">
                  <div>
                    <div className="text-xs font-semibold text-zinc-100">
                      At-Home Core & Mobility
                    </div>
                    <div className="text-[10px] text-zinc-400">
                      Multi-sport · At-Home · Assigned
                    </div>
                  </div>
                  <span className="rounded-full bg-blue-500/20 px-2 py-1 text-[10px] text-blue-400">
                    Remote
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ATHLETES SECTION */}
      <section id="athletes" className="border-b border-zinc-800 bg-black">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <div className="grid gap-8 md:grid-cols-2 md:flex-row-reverse">
            <div>
              <h2 className="text-xl font-bold text-white">For Athletes & Parents</h2>
              <p className="mt-2 text-sm text-zinc-400">
                No more “What should I do today?” Athletes see exactly what’s expected
                each day—with clear movement demos and space to track progress.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-zinc-300">
                <li>• Simple “Next Session” card with date, time, and environment.</li>
                <li>• Video links for every exercise so form stays sharp.</li>
                <li>• History view so athletes can see how far they’ve come.</li>
                <li>• At-home workouts that match what you’re doing in person.</li>
              </ul>
            </div>
            <div className="rounded-xl border border-red-600/40 bg-zinc-950 p-4">
              <div className="text-xs font-semibold uppercase tracking-wide text-red-400 mb-3">
                Athlete View · “Today’s Workout”
              </div>
              <div className="space-y-3 text-[11px]">
                <div className="rounded-lg border border-zinc-800 bg-black px-3 py-2">
                  <div className="text-xs font-semibold text-zinc-100">
                    Blast Full Body – Court
                  </div>
                  <div className="text-[10px] text-zinc-400">
                    Coach · Today · 4:00 PM · Court
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between rounded-lg border border-zinc-800 bg-black px-3 py-2">
                    <div>
                      <div className="text-xs font-semibold text-zinc-100">
                        A1 · Split Squat
                      </div>
                      <div className="text-[10px] text-zinc-400">
                        3 x 8 / leg · DB · Watch Demo
                      </div>
                    </div>
                    <button className="rounded-full border border-zinc-700 px-2 py-1 text-[10px] text-red-300 hover:border-red-400 hover:text-red-200">
                      Log Set
                    </button>
                  </div>

                  <div className="flex items-center justify-between rounded-lg border border-zinc-800 bg-black px-3 py-2">
                    <div>
                      <div className="text-xs font-semibold text-zinc-100">
                        B1 · Lateral Line Hops
                      </div>
                      <div className="text-[10px] text-zinc-400">
                        3 x 20s · Footwork · Watch Demo
                      </div>
                    </div>
                    <button className="rounded-full border border-zinc-700 px-2 py-1 text-[10px] text-red-300 hover:border-red-400 hover:text-red-200">
                      Log Set
                    </button>
                  </div>

                  <button className="mt-3 w-full rounded-full bg-red-600 py-2 text-[11px] font-semibold uppercase tracking-wide hover:bg-red-500">
                    Finish Workout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="bg-zinc-950">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <h2 className="text-xl font-bold text-white">How UNLTD Fits Your System</h2>
          <p className="mt-2 text-sm text-zinc-400 max-w-xl">
            We built the platform to match how you already think about programming:
            plug it right into The Key and your current sessions.
          </p>

          <ol className="mt-4 grid gap-4 text-sm text-zinc-300 md:grid-cols-4">
            <li className="rounded-xl border border-zinc-800 bg-black p-4">
              <div className="text-xs font-semibold uppercase tracking-wide text-red-400">
                Step 1
              </div>
              <p className="mt-2">
                Build your Exercise Library with tags for sport, level, and environment.
              </p>
            </li>
            <li className="rounded-xl border border-zinc-800 bg-black p-4">
              <div className="text-xs font-semibold uppercase tracking-wide text-red-400">
                Step 2
              </div>
              <p className="mt-2">
                Create workout templates that match your Blast, Drive, Elevate, and Overdrive days.
              </p>
            </li>
            <li className="rounded-xl border border-zinc-800 bg-black p-4">
              <div className="text-xs font-semibold uppercase tracking-wide text-red-400">
                Step 3
              </div>
              <p className="mt-2">
                Build multi-week programs and assign them to athletes or teams with a start date.
              </p>
            </li>
            <li className="rounded-xl border border-zinc-800 bg-black p-4">
              <div className="text-xs font-semibold uppercase tracking-wide text-red-400">
                Step 4
              </div>
              <p className="mt-2">
                Athletes log sets. You track progression and adjust as they move up levels.
              </p>
            </li>
          </ol>

          <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
            <div className="text-xs text-zinc-500">
              MVP: Web app for coaches on desktop and athletes on mobile web. Native app later.
            </div>
            <button className="rounded-full bg-red-600 px-6 py-2 text-xs font-semibold uppercase tracking-wide hover:bg-red-500">
              Talk About Your Academy Setup
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-zinc-800 bg-black">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-4 text-[11px] text-zinc-500 md:flex-row">
          <span>© {new Date().getFullYear()} UNLTD Academy · Training Platform</span>
          <span>Designed around The Key · Built for coaches who actually coach.</span>
        </div>
      </footer>
    </main>
  );
}
