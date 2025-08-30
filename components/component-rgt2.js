// NSAID Interactive Components JavaScript

// Detect current language
const getCurrentLanguage = () => {
    return document.documentElement.lang ||
           window.location.pathname.includes('/zh') ? 'zh' : 'en';
};

// Animation scenes data (Chinese)
const nsaidScenesZh = [
    {
        id: 1,
        title: "场景1：开场 - 表现痛经的不适感",
        videoUrl: "https://v3.fal.media/files/monkey/OMrBMAEeA1my97zJzH64q_output.mp4",
        narration: "很多女性每个月都会经历痛经，那种痉挛、疼痛的感觉让人非常不适。"
    },
    {
        id: 2,
        title: "场景2：解释痛经原因 - 前列腺素",
        videoUrl: "https://v3.fal.media/files/panda/DJlINSBKErKOTTRW4scwG_output.mp4",
        narration: "月经期间，子宫内膜会释放一种叫做'前列腺素'的物质。前列腺素会引起子宫肌肉剧烈收缩，导致疼痛。"
    },
    {
        id: 3,
        title: "场景3：引出NSAIDs",
        videoUrl: "https://v3.fal.media/files/monkey/sRVoOWjzmaoyzF7cure1m_output.mp4",
        narration: "而非甾体抗炎药，简称NSAID，是缓解痛经的常用药物。它们能从源头减少前列腺素的产生。"
    },
    {
        id: 4,
        title: "场景4：药物服用",
        videoUrl: "https://v3.fal.media/files/lion/O4Ys7oYqfMg3M0jR80mhw_output.mp4",
        narration: "当您服下NSAID药片后，它会进入消化系统。"
    },
    {
        id: 5,
        title: "场景5：吸收进入血液",
        videoUrl: "https://v3.fal.media/files/elephant/ejMBtuanCnJ9v_RH-3gXc_output.mp4",
        narration: "然后通过消化道被吸收到血液里，随着血液流向全身。"
    },
    {
        id: 6,
        title: "场景6：分布到作用部位",
        videoUrl: "https://v3.fal.media/files/lion/_wrFzYC89XCXhT08_ldCQ_output.mp4",
        narration: "药物分子随着血液循环，最终抵达引起疼痛的部位——比如您的子宫周围。"
    },
    {
        id: 7,
        title: "场景7：作用机制 - 抑制COX酶",
        videoUrl: "https://v3.fal.media/files/zebra/-3fM_hp6Ze7ceOdKospQ-_output.mp4",
        narration: "在这里，NSAID药物找到了产生前列腺素的关键'工厂'——环氧合酶，并抑制了它的活性。"
    },
    {
        id: 8,
        title: "场景8：减少前列腺素",
        videoUrl: "https://v3.fal.media/files/koala/-0hQKGQ9lIMGoyG_jRw2H_output.mp4",
        narration: "环氧合酶的工作被打断，前列腺素的合成量就大大降低了。"
    },
    {
        id: 9,
        title: "场景9：疼痛缓解",
        videoUrl: "https://v3.fal.media/files/monkey/OMrBMAEeA1my97zJzH64q_output.mp4",
        narration: "随着前列腺素减少，子宫收缩变得温和，疼痛感明显减轻。"
    },
    {
        id: 10,
        title: "场景10：药物代谢",
        videoUrl: "https://v3.fal.media/files/panda/DJlINSBKErKOTTRW4scwG_output.mp4",
        narration: "完成任务后，NSAID药物会被肝脏代谢，最终通过肾脏排出体外。"
    },
    {
        id: 11,
        title: "场景11：总结",
        videoUrl: "https://v3.fal.media/files/monkey/sRVoOWjzmaoyzF7cure1m_output.mp4",
        narration: "这就是NSAID缓解痛经的完整过程：从服用到吸收，从作用到代谢，科学而有效。"
    }
];

// Animation scenes data (English)
const nsaidScenesEn = [
    {
        id: 1,
        title: "Scene 1: Opening - Depicting Menstrual Pain Discomfort",
        videoUrl: "https://v3.fal.media/files/monkey/OMrBMAEeA1my97zJzH64q_output.mp4",
        narration: "Many women experience menstrual pain every month, with cramping and painful sensations that cause significant discomfort."
    },
    {
        id: 2,
        title: "Scene 2: Explaining the Cause of Menstrual Pain - Prostaglandins",
        videoUrl: "https://v3.fal.media/files/panda/DJlINSBKErKOTTRW4scwG_output.mp4",
        narration: "During menstruation, the uterine lining releases substances called 'prostaglandins'. Prostaglandins cause intense uterine muscle contractions, leading to pain."
    },
    {
        id: 3,
        title: "Scene 3: Introducing NSAIDs",
        videoUrl: "https://v3.fal.media/files/monkey/sRVoOWjzmaoyzF7cure1m_output.mp4",
        narration: "Nonsteroidal anti-inflammatory drugs, or NSAIDs, are commonly used medications for relieving menstrual pain. They can reduce prostaglandin production at the source."
    },
    {
        id: 4,
        title: "Scene 4: Drug Administration",
        videoUrl: "https://v3.fal.media/files/lion/O4Ys7oYqfMg3M0jR80mhw_output.mp4",
        narration: "When you take an NSAID tablet, it enters the digestive system."
    },
    {
        id: 5,
        title: "Scene 5: Absorption into Bloodstream",
        videoUrl: "https://v3.fal.media/files/elephant/ejMBtuanCnJ9v_RH-3gXc_output.mp4",
        narration: "The drug is then absorbed through the digestive tract into the bloodstream and circulates throughout the body."
    },
    {
        id: 6,
        title: "Scene 6: Distribution to Target Sites",
        videoUrl: "https://v3.fal.media/files/lion/_wrFzYC89XCXhT08_ldCQ_output.mp4",
        narration: "Drug molecules travel through blood circulation and eventually reach the pain-causing areas, such as around your uterus."
    },
    {
        id: 7,
        title: "Scene 7: Mechanism of Action - COX Enzyme Inhibition",
        videoUrl: "https://v3.fal.media/files/zebra/-3fM_hp6Ze7ceOdKospQ-_output.mp4",
        narration: "Here, NSAID drugs find the key 'factory' that produces prostaglandins - cyclooxygenase enzymes - and inhibit their activity."
    },
    {
        id: 8,
        title: "Scene 8: Reducing Prostaglandins",
        videoUrl: "https://v3.fal.media/files/koala/-0hQKGQ9lIMGoyG_jRw2H_output.mp4",
        narration: "With cyclooxygenase activity disrupted, prostaglandin synthesis is greatly reduced."
    },
    {
        id: 9,
        title: "Scene 9: Pain Relief",
        videoUrl: "https://v3.fal.media/files/monkey/OMrBMAEeA1my97zJzH64q_output.mp4",
        narration: "As prostaglandins decrease, uterine contractions become gentler, and pain sensation is significantly reduced."
    },
    {
        id: 10,
        title: "Scene 10: Drug Metabolism",
        videoUrl: "https://v3.fal.media/files/panda/DJlINSBKErKOTTRW4scwG_output.mp4",
        narration: "After completing their task, NSAID drugs are metabolized by the liver and eventually eliminated through the kidneys."
    },
    {
        id: 11,
        title: "Scene 11: Summary",
        videoUrl: "https://v3.fal.media/files/monkey/sRVoOWjzmaoyzF7cure1m_output.mp4",
        narration: "This is the complete process of how NSAIDs relieve menstrual pain: from administration to absorption, from action to metabolism - scientific and effective."
    }
];

// Animation Player Class
class NSAIDAnimationPlayer {
    constructor() {
        this.currentSceneIndex = 0;
        this.language = getCurrentLanguage();
        this.scenes = this.language === 'zh' ? nsaidScenesZh : nsaidScenesEn;
        this.initializeElements();
        this.bindEvents();
        this.loadScene(0);
    }

    initializeElements() {
        this.videoPlayer = document.getElementById('nsaidAnimationPlayer');
        this.sceneTitleElement = document.getElementById('nsaidSceneTitle');
        this.narrationTextElement = document.getElementById('nsaidNarrationText');
        this.prevButton = document.getElementById('nsaidPrevButton');
        this.nextButton = document.getElementById('nsaidNextButton');
        this.sceneIndicatorElement = document.getElementById('nsaidSceneIndicator');
    }

    bindEvents() {
        if (this.prevButton) {
            this.prevButton.addEventListener('click', () => this.playPrevScene());
        }
        
        if (this.nextButton) {
            this.nextButton.addEventListener('click', () => this.playNextScene());
        }

        if (this.videoPlayer) {
            this.videoPlayer.addEventListener('ended', () => {
                // Auto-advance to next scene when current video ends
                if (this.currentSceneIndex < this.scenes.length - 1) {
                    this.playNextScene();
                }
            });

            this.videoPlayer.addEventListener('error', (e) => {
                console.error('Video error:', e);
                this.handleVideoError();
            });
        }
    }

    loadScene(index) {
        if (index < 0 || index >= this.scenes.length) {
            console.error('Scene index out of bounds:', index);
            return;
        }

        this.currentSceneIndex = index;
        const scene = this.scenes[this.currentSceneIndex];

        if (this.videoPlayer) {
            this.videoPlayer.src = scene.videoUrl;
            this.videoPlayer.load();
            
            // Try to play the video
            const playPromise = this.videoPlayer.play();
            if (playPromise !== undefined) {
                playPromise.catch(error => {
                    console.warn("Autoplay prevented for scene:", scene.id, error);
                });
            }
        }

        if (this.sceneTitleElement) {
            this.sceneTitleElement.textContent = scene.title;
        }

        if (this.narrationTextElement) {
            this.narrationTextElement.textContent = scene.narration;
        }

        if (this.sceneIndicatorElement) {
            const sceneText = this.language === 'zh' ? '场景' : 'Scene';
            this.sceneIndicatorElement.textContent = `${sceneText} ${scene.id} / ${this.scenes.length}`;
        }

        this.updateNavigationButtons();
    }

    updateNavigationButtons() {
        if (this.prevButton) {
            this.prevButton.disabled = this.currentSceneIndex === 0;
        }
        
        if (this.nextButton) {
            this.nextButton.disabled = this.currentSceneIndex === this.scenes.length - 1;
        }
    }

    playNextScene() {
        if (this.currentSceneIndex < this.scenes.length - 1) {
            this.loadScene(this.currentSceneIndex + 1);
        }
    }

    playPrevScene() {
        if (this.currentSceneIndex > 0) {
            this.loadScene(this.currentSceneIndex - 1);
        }
    }

    handleVideoError() {
        const language = getCurrentLanguage();
        if (this.narrationTextElement) {
            const errorMessage = language === 'zh'
                ? '抱歉，视频加载失败。请检查您的网络连接或稍后再试。'
                : 'Sorry, video failed to load. Please check your network connection or try again later.';
            this.narrationTextElement.textContent = errorMessage;
        }
        if (this.sceneTitleElement) {
            const errorTitle = language === 'zh' ? '视频加载错误' : 'Video Loading Error';
            this.sceneTitleElement.textContent = errorTitle;
        }
    }
}

// Calculator Class
class NSAIDCalculator {
    constructor() {
        this.language = getCurrentLanguage();
        this.initializeElements();
        this.bindEvents();
    }

    initializeElements() {
        this.drugSelect = document.getElementById('drug-select');
        this.weightInput = document.getElementById('weight-input');
        this.calculateButton = document.getElementById('calculate-dose-button');
        this.doseResultDiv = document.getElementById('dose-result');
        this.resultDrugName = document.getElementById('result-drug-name');
        this.resultSingleDose = document.getElementById('result-single-dose');
        this.resultMaxDailyDose = document.getElementById('result-max-daily-dose');
        this.resultNotes = document.getElementById('result-notes');
    }

    bindEvents() {
        if (this.calculateButton) {
            this.calculateButton.addEventListener('click', () => this.calculateDose());
        }
    }

    calculateDose() {
        const selectedDrug = this.drugSelect?.value;
        const weight = parseFloat(this.weightInput?.value);

        if (isNaN(weight) || weight <= 0) {
            this.hideResults();
            const alertMessage = this.language === 'zh'
                ? '请输入有效的体重。'
                : 'Please enter a valid weight.';
            alert(alertMessage);
            return;
        }

        let drugNameDisplay = '';
        let singleDose = '';
        let maxDailyDose = '';
        let notes = '';

        if (selectedDrug === 'ibuprofen') {
            if (this.language === 'zh') {
                drugNameDisplay = '布洛芬 (Ibuprofen)';
                singleDose = '200 - 400 mg';
                maxDailyDose = '1200 mg (若需更高剂量或长期使用，请咨询医生。部分处方情况下可达2400mg)';
                notes = '成人常用剂量，通常每4-6小时一次。请勿超过每日最大剂量。';
            } else {
                drugNameDisplay = 'Ibuprofen';
                singleDose = '200 - 400 mg';
                maxDailyDose = '1200 mg (consult doctor for higher doses or long-term use. Up to 2400mg in some prescription cases)';
                notes = 'Standard adult dose, usually every 4-6 hours. Do not exceed maximum daily dose.';
            }
        } else if (selectedDrug === 'naproxen') {
            if (this.language === 'zh') {
                drugNameDisplay = '萘普生 (Naproxen)';
                singleDose = '首次剂量500 mg，之后根据需要可服用250 - 500 mg';
                maxDailyDose = '1250 mg';
                notes = '通常每6-12小时一次。请勿超过每日最大剂量。';
            } else {
                drugNameDisplay = 'Naproxen';
                singleDose = 'Initial dose 500 mg, then 250 - 500 mg as needed';
                maxDailyDose = '1250 mg';
                notes = 'Usually every 6-12 hours. Do not exceed maximum daily dose.';
            }
        }

        this.displayResults(drugNameDisplay, singleDose, maxDailyDose, notes);
    }

    displayResults(drugName, singleDose, maxDailyDose, notes) {
        if (this.resultDrugName) this.resultDrugName.textContent = drugName;
        if (this.resultSingleDose) this.resultSingleDose.textContent = singleDose;
        if (this.resultMaxDailyDose) this.resultMaxDailyDose.textContent = maxDailyDose;
        if (this.resultNotes) this.resultNotes.textContent = notes;
        
        if (this.doseResultDiv) {
            this.doseResultDiv.classList.remove('hidden');
        }
    }

    hideResults() {
        if (this.doseResultDiv) {
            this.doseResultDiv.classList.add('hidden');
        }
        
        if (this.resultDrugName) this.resultDrugName.textContent = '';
        if (this.resultSingleDose) this.resultSingleDose.textContent = '';
        if (this.resultMaxDailyDose) this.resultMaxDailyDose.textContent = '';
        if (this.resultNotes) this.resultNotes.textContent = '';
    }
}

// Initialize components when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lucide icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    // Initialize animation player if elements exist
    if (document.getElementById('nsaidAnimationPlayer')) {
        new NSAIDAnimationPlayer();
    }

    // Initialize calculator if elements exist
    if (document.getElementById('nsaidCalculateButton')) {
        new NSAIDCalculator();
    }
});
