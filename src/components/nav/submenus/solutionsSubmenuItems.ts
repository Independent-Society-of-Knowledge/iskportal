/*
 * Copyright © 2024 Independent Society of Knowledge
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 2 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <https://www.gnu.org/licenses/>.
 *
 * Contact Information:
 * Independent Society of Knowledge
 * Email: projects@iskportal.com
 *
 * SPDX-License-Identifier: GPL-2.0-or-later
 *
 * Developed by: Amir H. Ebrahimnezhad (if you helped or your commits are going to be pulled please add your name and email with a comma.)
 * Email:        ceo@iskportal.com
 * version 1.0.0
 *
 */

export const solutionsSubmenuItems: {
    title: String,
    description: String,
    cards: { title: String, description: String, link: String, type: "Button" | "Card" }[]
}[] = [
    {
        title: "Initiatives",
        description: "Initiatives are comprehensive movements that include multiple interconnected projects. They aim for systemic change rather than isolated outcomes.",
        cards: [{
            title: "Kotlin For Science",
            description: "Development of libraries and packages for Kotlin to be enriched for scientific purposes.",
            link: "", type: "Card"
        }]
    },
    {
        title: "Software",
        description: "Software are complete solutions for scientific research and computation. These solutions try to enhance research and development of ideas.",
        cards: [
            {
                title: "Koncept",
                description: "The ultimate Integrated Research Environment.",
                link: "", type: "Card"
            },
            {
                title: "KnowledgeBase",
                description: "Do research collaboratively.",
                link: "", type: "Card"
            },
            {
                title: "Timelike",
                description: "A Blog social media for scientists and researchers.",
                link: "", type: "Card"
            },
            {
                title: "DeduKt",
                description: "System of mathematical reasoning.",
                link: "", type: "Card"
            }
        ]
    },
    {
        title: "Libraries and Packages",
        description: "Development of libraries for scientific computation and simulations.",
        cards: [
            {
                title: "VeKtor",
                description: "Kotlin library for vector algebra.",
                link: "", type: "Card"
            },
            {
                title: "PartiKle",
                description: "Simulations and calculations of particle physics.",
                link: "", type: "Card"
            },
            {
                title: "MoleKule",
                description: "Molecular dynamics simulations.",
                link: "", type: "Card"
            },
            {
                title: "Akzent",
                description: "Kotlin language modeling system.",
                link: "", type: "Card"
            },
            {
                title: "Kosmos",
                description: "Cosmology, Relativity and Astronomy computations.",
                link: "", type: "Card"
            },
            {
                title: "Kompute",
                description: "Kotlin mathematical library.",
                link: "", type: "Card"
            },
            {
                title: "Ekuation",
                description: "Solving differential equations numerically.",
                link: "", type: "Card"
            },
            {
                title: "All Packages",
                description: "",
                link: "", type: "Button"
            }
        ]
    },
    {
        title: "Automation and Workflows",
        description: "Making scientific research easier by automation.",
        cards: [
            {
                title: "Kluster",
                description: "Intensive Computation and Node Handling Solution.",
                link: "", type: "Card"
            },
            {
                title: "Koncept/Workflows",
                description: "Workflow plugin for Koncept.",
                link: "", type: "Card"
            }
        ]
    },
    {
        title: "Support",
        description: "Get help in your research.",
        cards: [
            {
                title: "Single Evaluation",
                description: "Support sessions on your project.",
                link: "", type: "Card"
            },
            {
                title: "Feature",
                description: "Help with development.",
                link: "", type: "Card"
            }
        ]
    },
    {
        title: "Research",
        description: "Asking the next why.",
        cards: [
            {
                title: "Research Groups",
                description: "Help us build something new",
                link: "", type: "Card"
            },
            {
                title: "Current Researches",
                description: "What is being found?",
                link: "", type: "Card"
            },
            {
                title: "Proposals",
                description: "New researches getting started.",
                link: "", type: "Card"
            }
        ]
    },
    {
        title: "Edu Program",
        description: "Knowledge should be accessible.",
        cards: [
            {
                title: "Edu Program",
                description: "Free Education for all.",
                link: "", type: "Card"
            },
            {
                title: "Study Groups",
                description: "Join us in learning.",
                link: "", type: "Card"
            },
            {
                title: "Internships",
                description: "Learn by helping.",
                link: "", type: "Card"
            },
            {
                title: "Events and Workshops",
                description: "See what's happening in your surrounding.",
                link: "",  type: "Card"
            }
        ]
    }
]