import { useState } from "preact/hooks";

export default function AffiliateIsland({propositions}) {
    return (
        <div class="affiliate-island">
            <h1>Review Propositions</h1>
            <ul class="proposition-list">
                {propositions.map((proposition) => (
                    <li class="proposition-item">
                        <h2>{proposition.productName}</h2>
                        <p>{proposition.description}</p>
                        <button onClick={() => handleAcceptProposition(proposition.id)}>Accept</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}