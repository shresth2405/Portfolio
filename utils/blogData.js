export const blogs = [
    {
        slug: "road-to-understanding-criu",
        title: "The Road to Understanding CRIU: What I Had to Learn First",
        date: "2025-03-10",
        tags: ["open-source", "linux", "criu", "systems-programming"],
        content: `# The Road to Understanding CRIU: What I Had to Learn First

Every technical journey starts with a small curiosity. Mine didn't begin with low-level systems programming or Linux internals. It started much higher up the stack.

At first, I was exploring the scope of the **MERN stack**. Like many developers, I was fascinated by how modern web applications work — React on the frontend, Node and Express on the backend, and databases tying everything together. But while building and experimenting with backend tools, I noticed something interesting about myself: I wasn't just curious about *using* these tools, I wanted to understand **how they worked underneath**.

What actually happens when a backend server handles requests?
How does the operating system manage processes?
What is really happening behind the APIs and frameworks we casually use?

Those questions slowly pushed me toward the systems side of computing.

## Moving into the Linux World

To explore that curiosity properly, I decided to move into a Linux environment. I installed **Manjaro Linux** and started getting comfortable with the system.

The first step was simple: understanding the environment.

I spent time learning the basics of the shell, writing small shell scripts, and exploring how Linux organizes files, processes, and commands. At first it was just experimentation — trying commands, breaking things, fixing them again. Gradually the terminal stopped feeling intimidating and started feeling like a place where I could actually understand what my system was doing.

That was an important shift. Once you become comfortable with Linux, the idea of exploring systems programming feels much more approachable.

## Discovering Low-Level Systems

Around the same time, I was studying operating systems through **Luv Babbar's OS playlist**. The more I studied topics like processes, memory management, and scheduling, the more curious I became about how these concepts actually appear in real software.

Reading theory alone wasn't enough for me. I tend to learn best when I can **work with real systems and real code**, not just textbooks. So I decided that if I wanted to explore low-level systems properly, I should do it through something practical.

That was around **October**, when I started seriously thinking about diving into lower-level development.

## Choosing the Open Source Path

Since I strongly believe in learning by doing, open source felt like the natural direction. It allows you to explore real projects, read production code, and learn directly from the way experienced developers design systems.

So I began searching for open source projects related to **low-level Linux systems**.

While exploring different options, I came across **CRIU (Checkpoint/Restore In Userspace)**. The project focuses on saving and restoring Linux processes — essentially capturing the state of a running process and bringing it back later.

At first glance, the idea itself sounded fascinating.

CRIU interacts deeply with Linux internals: processes, memory mappings, file descriptors, namespaces, and much more. But what made it especially appealing was that it works **in userspace**, meaning I could explore complex Linux concepts without immediately diving into kernel development.

That made it feel like the perfect starting point for someone trying to move toward systems programming.

It offered a chance to explore how Linux works internally while still staying within a manageable learning curve.

## Taking the First Step

Once I decided to explore CRIU, the first step was simply setting up the development environment. Even that initial process taught me a lot about how large open source projects are structured.

The early stages involved reading documentation, exploring the repository, and slowly becoming familiar with the ecosystem around the project.

During this process, I also received a lot of guidance that helped me move forward whenever I felt stuck. Having someone to clarify concepts and help break down complex topics made the journey much smoother.

Those early steps didn't involve writing complex code or making major contributions yet. Instead, they were about **understanding the landscape** — how Linux processes work, how CRIU interacts with them, and how large system projects are structured.

And that's where this journey really began.

## The Beginning of a Longer Exploration

What started as curiosity about backend tools eventually led me into the world of Linux systems programming. Installing Linux, learning the shell, studying operating system concepts, and discovering CRIU gradually shaped a new direction in my learning.

This blog series will document that journey — the path from high-level web development curiosity to understanding how Linux processes actually work.

In the next posts, I'll explore the concepts I had to learn along the way, starting with one of the most fundamental pieces of the puzzle:

**How Linux processes actually work.**`,
    },
    {
        slug: "preparing-to-read-criu-codebase",
        title: "Preparing to Read the CRIU Codebase: Learning Linux Internals From Scratch",
        date: "2026-03-16",
        tags: ["open-source", "linux", "criu", "ptrace", "systems-programming"],
        content: `# Preparing to Read the CRIU Codebase: Learning Linux Internals From Scratch

When I first discovered CRIU, I was excited to start reading the codebase immediately.

That excitement lasted for about five minutes.

The moment I opened the repository, I realized something important: I didn't yet have the mental model required to understand what was happening. The project works very closely with Linux internals, and many concepts that appeared in the code — namespaces, cgroups, ptrace, \`/proc\`, ELF structures — were things I had either only heard about or never explored in practice.

At that point, it became clear that before contributing to CRIU, I first needed to **build the foundation required to read it**.

## The Knowledge Gap

CRIU interacts deeply with how Linux represents processes and their state. To understand even a small part of the codebase, I needed to get comfortable with several Linux concepts:

- **Namespaces** – how Linux isolates resources like PIDs, mounts, and networks
- **cgroups** – how processes are grouped and resource limits are enforced
- **The \`/proc\` filesystem** – the interface through which user space programs inspect process state
- **\`ptrace\`** – the mechanism used by debuggers to inspect and control processes
- **Memory layouts** – how a process's memory is organized

At the beginning, these topics felt scattered. Each one opened up another rabbit hole.

But slowly, they started forming a picture of how Linux actually manages processes.

## Learning by Experimenting

I strongly prefer learning through hands-on experiments rather than just reading documentation. So instead of only studying theory, I started building small experiments around these concepts.

One of the most interesting exercises was building **a simple debugger using \`ptrace\`**. This helped me understand how debuggers interact with processes — attaching to them, inspecting their state, and controlling execution.

Working with \`ptrace\` made the relationship between user space tools and the kernel much clearer.

Alongside that, I also practiced working with **namespaces** and explored how Linux exposes system information through the \`/proc\` filesystem. These experiments helped me understand how processes, files, and system resources are represented internally.

## Hands-on Exercises

To make these concepts more concrete, I implemented several small experiments and practice programs while learning these topics. Instead of keeping them locally, I documented them in a repository so that I could track my learning process and revisit these experiments later.

The exercises included things like:

- Writing a **simple debugger using \`ptrace\`**
- Experimenting with **process attachment using \`PTRACE_ATTACH\` and \`PTRACE_SEIZE\`**
- Exploring **Linux namespaces** and how processes behave inside them
- Inspecting process state through the **\`/proc\` filesystem**
- Understanding **file-backed memory mappings and inodes**
- Observing how **process memory regions appear in \`/proc/<pid>/maps\`**

All of these small practice programs are available in my practice repository: [shresth2405/Criu-hands-on-practice](https://github.com/shresth2405/Criu-hands-on-practice)

These exercises helped bridge the gap between theoretical concepts and real system behavior. Seeing how these mechanisms actually work on a running Linux system made the learning process much clearer.

## An Unexpected Pause

This exploration phase lasted for about half a month. I was slowly building confidence with these Linux internals.

Then something familiar to every student happened — **semester exams arrived**.

My 5th semester endsems forced me to pause this exploration for a while. Like many side projects, learning systems programming had to temporarily give way to academic responsibilities.

But once the exams were over, I returned to the process of learning and experimenting.

## Getting Ready to Read Real Systems Code

After spending time understanding these foundational pieces — namespaces, ptrace, process inspection, memory layouts — I finally felt more comfortable approaching the CRIU codebase again.

The difference was noticeable.

Concepts that previously looked cryptic in the code were now recognizable. I could begin connecting the theory I had studied with the way a real system-level project implements it.

This phase of preparation might not have produced immediate contributions, but it was essential. Without building that mental model first, reading the code would have felt like navigating a maze without a map.

Now, with that groundwork in place, the next step was clear:

**start reading the CRIU source code seriously and begin working toward real contributions.**`,
    },
    {
        slug: "mistake-that-slowed-me-down",
        title: "The Mistake That Slowed Me Down: Trying to Solve Problems Before Understanding the System",
        date: "2026-03-20",
        tags: ["open-source", "linux", "criu", "systems-programming", "learning"],
        content: `# The Mistake That Slowed Me Down: Trying to Solve Problems Before Understanding the System

After spending hours building my foundation in Linux internals, I felt ready to take the next step: contributing to CRIU.

But instead of approaching it the right way, I made a decision that, in hindsight, slowed me down significantly.

I thought:

> "Let me explore issues first so I understand the problems before reading the code."

At a high level, this sounds logical. It's a common approach in web development or application-level projects — you look at an issue, understand the requirement, and then dive into the code.

But CRIU is not that kind of project.

## The Wrong Assumption

What I failed to realize was that **low-level systems code does not work like high-level application code**.

In high-level development:

* You can often understand a problem from the issue description
* You can jump into code and patch things incrementally

But in CRIU:

* The "problem" is deeply tied to **Linux internals**
* The code reflects **complex system behaviour**
* Without a mental model of the system, the issue itself doesn't fully make sense

So by trying to understand issues first, I was essentially trying to solve problems **without understanding the system they exist in**.

## Exploring Issues Without Context

Even then, I continued down that path.

I explored multiple issues, including:

* **MPTCP support**
* **io_uring support**
* **POSIX message queues**

At first, these sounded like interesting and meaningful areas to work on.

But every time I tried to go deeper, I hit the same wall:

I couldn't understand **why the problem existed**.

Not because the issues were unclear — but because I didn't yet understand:

* how CRIU interacts with these subsystems
* what assumptions the codebase makes
* how Linux behaves in these scenarios

I was reading problems, but I wasn't equipped to interpret them.

## Months of Friction

This phase lasted longer than I expected.

I was reading, exploring, and trying to connect things — but progress felt slow. It wasn't a complete waste, but it lacked direction.

Looking back, the issue wasn't effort. It was **approach**.

I was trying to think like someone who already understood the system, without actually building that understanding first.

## Changing the Approach

Eventually, after struggling for quite some time, I decided to change strategy.

Instead of chasing issues, I went back to something more fundamental:

**understanding the core files of the CRIU codebase.**

I started focusing on:

* \`cr-dump.c\` — how CRIU performs the dump phase
* \`cr-restore.c\` — how it reconstructs processes
* \`pstree.c\` — how process relationships are managed

This time, the goal wasn't to solve anything.

It was simply to understand:

* what the code is doing
* how the flow works
* how different components interact

## The First Signs of Clarity

As I started following the **dump → restore flow**, things began to make more sense.

For the first time, I could see:

* how CRIU walks the process tree
* how it collects process state
* how it reconstructs that state during restore

It wasn't perfect understanding, but it was **structured understanding** — which is very different from randomly exploring issues.

## A Small but Important Change: Writing Notes

Another mistake I realized was that I wasn't retaining what I learned.

So this time, I started **writing notes while reading the code**.

Not detailed documentation — just:

* steps of the dump process
* order of operations
* key functions and their roles

This helped in two ways:

1. I didn't have to "re-learn" things repeatedly
2. I could slowly build a **mental model of the system**

And that mental model was exactly what I was missing earlier.

## Another Pause

Just when things started to feel clearer, something familiar happened again:

**mid-semester exams.**

Once again, the learning process paused.

And once again, I had to come back and rebuild momentum.

## Where I Stand Now

By the time I returned and continued this process, it was already **March**.

Looking back, it might seem like slow progress.

But something important had changed:

I was no longer trying to jump into problems blindly.

I was starting to understand the **roots of the system**.

And that changes everything.

Because in low-level systems work, progress doesn't come from quickly solving issues — it comes from building the ability to **see why the issue exists in the first place**.

In the next part of this journey, I'll go deeper into how I started understanding the **actual flow of CRIU's dump and restore process**, and how that finally allowed me to approach problems with clarity instead of confusion.`,
    },
    {
        slug: "finding-my-direction-in-criu",
        title: "From Understanding the System to Choosing a Problem: Finding My Direction in CRIU",
        date: "2026-03-28",
        tags: ["open-source", "linux", "criu", "copy-on-write", "systems-programming", "gsoc"],
        content: `# From Understanding the System to Choosing a Problem: Finding My Direction in CRIU

After spending months building a foundation, reading core files, and understanding the dump and restore flow, I finally reached a stage where the codebase no longer felt completely unfamiliar. I could follow the execution path, recognize major components, and most importantly, understand how different pieces of the system connected.

That was the point where I felt ready to take the next meaningful step:

**choosing a problem to work on.**

## Exploring Issues and Recommendations

This time, my approach was different from before.

Earlier, I had tried to explore issues without understanding the system, which led to confusion. But now, after developing a mental model of how CRIU works, reading issues felt much more structured.

So I started carefully going through:

* Issues listed in the CRIU GitHub repository
* Discussions and recommendations from previous contributors and students
* Suggestions from maintainers about areas that needed improvement

Instead of randomly jumping into problems, I tried to understand:

* What subsystem the issue belonged to
* Why the problem existed
* What part of the system was affected

That process led me to a problem that immediately caught my attention:

**Optimize Copy-on-Write Memory Dumping in CRIU**

## Discovering Copy-on-Write

At first, the title itself raised many questions.

What exactly is Copy-on-Write?
Why does CRIU need to optimize it?
Where does it appear in the dump process?

So before thinking about implementation, I focused on understanding the underlying mechanism.

I started reading about **Copy-on-Write (COW)** and how operating systems use it to optimize memory management. The idea is simple but powerful:

Instead of copying memory immediately, the system delays the copy until a write operation actually happens.

This allows multiple processes to share the same memory pages efficiently, reducing unnecessary duplication and improving performance.

But in the context of checkpointing and restoring processes, this mechanism introduces complexity.

CRIU must carefully decide:

* which memory pages need to be dumped
* which pages can be reused
* when a page has been modified
* how to maintain consistency during restore

Understanding this behavior helped me see why optimizing COW dumping is both important and challenging.

## Studying the Problem in Depth

Once I understood the theory, I went back to the problem description and started reading it more carefully.

This time, the details made sense.

I could connect the issue with:

* memory mappings
* page states
* dump performance
* restore correctness

Instead of seeing the problem as a vague requirement, I could see it as a concrete system behavior that needed improvement.

That shift in understanding made the problem feel approachable.

## Learning by Implementing

To strengthen my understanding, I decided to go beyond reading.

I took the liberty of implementing small practical experiments related to Copy-on-Write behavior.

These experiments helped me observe:

* how memory pages are shared between processes
* when copies are triggered
* how memory changes appear in system inspection tools
* how write operations affect page states

Seeing the mechanism in action made the concept much clearer than reading documentation alone.

It also helped me connect theoretical knowledge with real system behavior — something that has been a recurring theme throughout this journey.

## Starting the Proposal Journey

After spending time understanding the mechanism and the problem, I reached another milestone:

**starting my proposal.**

Before writing anything, I studied proposals from previous contributors.

I wanted to understand:

* how a strong proposal is structured
* how ideas are communicated clearly
* how timelines are planned realistically
* how technical details are presented

Reading those proposals gave me a blueprint.

Not something to copy, but something to learn from.

Then I started drafting my own proposal — slowly, carefully, and with a much clearer understanding of the system than I had when I first began this journey.

## Where I Stand Today

Looking back, this phase felt different from the earlier stages.

Previously, most of my time was spent learning concepts and understanding systems.

Now, the focus has shifted toward:

* identifying a meaningful problem
* understanding its technical depth
* preparing a concrete plan to solve it

That transition marks an important step — moving from learning the system to contributing to it.

And as I write this, the timeline has brought me to the present.

This blog captures the journey up to today — from exploring issues and discovering the Copy-on-Write optimization problem, to studying the mechanism, experimenting with it, and beginning the proposal drafting process.

I believe this will likely be the **last or second-to-last entry** in this series before submitting my proposal.

Regardless of the outcome, this journey has already taught me something valuable:

Progress in low-level systems doesn't happen suddenly.
It happens gradually — through patience, persistence, and a willingness to understand the system before trying to change it.`,
    },
];
