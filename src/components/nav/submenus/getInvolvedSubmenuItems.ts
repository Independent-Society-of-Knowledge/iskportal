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

export const getInvolvedSubmenuItems: {
    title: String,
    description: String,
    cards: { title: String, description: String, link: String, type: "Button" | "Card" }[]
}[] = [
    {
        title: "Press",
        description: "News and announcements from Independent Society of Knowledge.",
        cards: [
            {
                title: "Announcements",
                description:"Official decisions and events happening at ISK.",
                link: "", type: "Card"
            },
            {
                title: "Current Projects",
                description: "What are we up to right now.",
                link: "", type: "Card"
            },
            {
                title: "Proposals",
                description: "Our further projects.",
                link: "", type: "Card"
            },
            {
                title: "Log",
                description: "All the events in a timeline.",
                link: "", type: "Card"
            }
        ]
    },
    {
        title: "Contribution",
        description: "Help ISK reach its mission through contributions in open-projects.",
        cards: [
            {
                title: "Find Your Place",
                description: "Find possible issues and problems you can work on right away.",
                link: "", type: "Card"
            },
            {
                title: "Guidelines",
                description: "Contribute Effectively.",
                link: "", type: "Card"
            },
            {
                title: "Become Official",
                description: "Become and official member to the Independent Society of Knowledge.",
                link: "", type: "Card"

            }
        ]
    },
    {
        title: "Collaboration",
        description: "For teams and organizations.",
        cards: [
            {
                title: "Organizations",
                description: "Become and official partner of Independent Society of Knowledge.",
                link: "", type: "Card"
            },
            {
                title: "Teams and Research Groups",
                description: "Join ISK as a team or a research group.",
                link: "", type: "Card"
            },
            {
                title: "Institutes",
                description: "Reach out to us as an institute of science or technology.",
                link: "", type: "Card"
            }
        ]
    },
    {
        title: "Public Outreach",
        description: "Help ISK with its mission.",
        cards: [
            {
                title: "Raise Awareness",
                description: "How to help us gain attention",
                link: "", type: "Card"
            },
            {
                title: "Connection",
                description: "Find ISK online.",
                link: "", type: "Card"
            },
            {
                title: "Local",
                description: "Find about what's happening near you.",
                link: "", type: "Card"
            }
        ]
    }
]